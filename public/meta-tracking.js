/**
 * META TRACKING
 * Cria o cookie _fbc a partir do fbclid na URL
 * Os valores são lidos diretamente no Modal ao submeter
 */

(function() {
  'use strict';

  function lerCookie(nome) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieNome, cookieValor] = cookie.trim().split('=');
      if (cookieNome === nome) return decodeURIComponent(cookieValor);
    }
    return null;
  }

  function definirCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = `${nome}=${encodeURIComponent(valor)};expires=${data.toUTCString()};path=/;SameSite=Lax`;
  }

  function inicializar() {
    if (lerCookie('_fbc')) return;

    const fbclid = new URLSearchParams(window.location.search).get('fbclid');
    if (fbclid) {
      const fbc = `fb.1.${Date.now()}.${fbclid}`;
      definirCookie('_fbc', fbc, 90);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
  } else {
    inicializar();
  }

})();
