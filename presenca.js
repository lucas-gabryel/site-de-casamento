async function verificarPresenca(event) {
  event.preventDefault(); // Impede o recarregamento da página

  const nomeCompleto = document.getElementById('name').value.trim();
  const resultado = document.getElementById('resultado');

  if (!nomeCompleto) {
    resultado.textContent = "Por favor, insira seu nome completo.";
    return;
  }

  try {
    // URL do Google Apps Script
    const url = 'https://script.google.com/macros/s/AKfycbzIjI1_HinciDUe2C3Lg46MAkG27B17Ii4ZdPmV7qErx31FH1rFB14e2vM55fuUFgj8/exec';

    // Requisição POST (sem CORS)
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ nome: nomeCompleto }),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors', // Modo no-cors para evitar bloqueio de CORS
    });

    // Requisição GET (com CORS) para verificar o status
    const getUrl = `${url}?nome=${encodeURIComponent(nomeCompleto)}`;
    const response = await fetch(getUrl, {
      method: 'GET',
    });

    const message = await response.text();
    resultado.textContent = message; // Exibe a mensagem de confirmação ou erro
  } catch (error) {
    console.error('Erro ao verificar presença:', error);
    resultado.textContent = "Erro ao verificar presença. Tente novamente mais tarde.";
  }
}

// Adiciona o evento ao formulário
document.querySelector('form').addEventListener('submit', verificarPresenca);