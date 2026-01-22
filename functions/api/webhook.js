/**
 * Cloudflare Pages Function - Proxy para N8N
 *
 * Este endpoint recebe o POST do formulário e encaminha para o N8N
 * com autenticação Basic Auth, resolvendo problemas de CORS.
 *
 * URL: https://drcarlos.pauloberto.com.br/api/webhook
 */

export async function onRequest(context) {
  const { request } = context;

  // Headers CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Responde ao preflight OPTIONS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  // Só aceita POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), {
      status: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    // Lê o body da requisição
    const body = await request.text();

    // Credenciais Basic Auth para N8N
    const credentials = btoa('n8n:n8n1597530');

    // Envia para o N8N
    const n8nResponse = await fetch(
      'https://10028.hostoo.net.br/webhook/aeaae9a8-92b2-4ad9-bcf4-d7fb815c2a42',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`
        },
        body: body
      }
    );

    // Pega a resposta do N8N
    const responseText = await n8nResponse.text();

    // Retorna para o frontend com CORS
    return new Response(responseText, {
      status: n8nResponse.status,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Erro ao encaminhar para N8N:', error);

    return new Response(
      JSON.stringify({
        error: 'Erro ao processar requisição',
        message: error.message
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
