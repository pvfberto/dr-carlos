/**
 * META TRACKING CAPTURE
 * Captura _fbp e _fbc para conversões offline
 */

(function() {
  'use strict';

  const CONFIG = {
    campos: {
      fbp: 'campo_fbp',
      fbc: 'campo_fbc'
    },
    fbcExpiracaoDias: 90,
    debug: true // Modo debug ativado para troubleshooting
  };

  function log(mensagem, dados = null) {
    if (CONFIG.debug) {
      console.log(`[Meta Tracking] ${mensagem}`, dados || '');
    }
  }

  function lerCookie(nome) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieNome, cookieValor] = cookie.trim().split('=');
      if (cookieNome === nome) {
        return decodeURIComponent(cookieValor);
      }
    }
    return null;
  }

  function extrairParametroURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
  }

  function formatarFbc(fbclid) {
    const creationTime = Date.now();
    return `fb.1.${creationTime}.${fbclid}`;
  }

  function definirCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expira = `expires=${data.toUTCString()}`;
    document.cookie = `${nome}=${encodeURIComponent(valor)};${expira};path=/;SameSite=Lax`;
  }

  function capturarFbp() {
    return lerCookie('_fbp');
  }

  function capturarFbc() {
    let fbc = lerCookie('_fbc');
    if (fbc) return fbc;

    const fbclid = extrairParametroURL('fbclid');
    if (fbclid) {
      fbc = formatarFbc(fbclid);
      definirCookie('_fbc', fbc, CONFIG.fbcExpiracaoDias);
      return fbc;
    }
    return null;
  }

  function preencherCampo(campoId, valor) {
    const campo = document.getElementById(campoId);
    if (campo) {
      campo.value = valor || '';
      // Dispara evento de mudança para React detectar
      const event = new Event('input', { bubbles: true });
      campo.dispatchEvent(event);
    }
  }

  function executarCaptura() {
    const fbp = capturarFbp();
    const fbc = capturarFbc();

    log('📊 Valores capturados:', { fbp, fbc });
    log('🍪 Todos os cookies:', document.cookie);
    log('🔗 URL atual:', window.location.href);

    preencherCampo(CONFIG.campos.fbp, fbp);
    preencherCampo(CONFIG.campos.fbc, fbc);

    log('✅ Captura concluída - Campos preenchidos');
  }

  function inicializar() {
    executarCaptura();
    // Aguarda 3s para o Pixel criar os cookies
    setTimeout(executarCaptura, 3000);
    // Verificação extra no momento do submit
    document.addEventListener('submit', function(e) {
      if (e.target && e.target.tagName === 'FORM') {
        executarCaptura();
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
  } else {
    inicializar();
  }

})();
