async function verificarPresenca(event) {
    event.preventDefault(); // Impede o recarregamento da página
  
    const nomeCompleto = document.getElementById('name').value.trim();
    const resultado = document.getElementById('resultado');
  
    if (!nomeCompleto) {
      resultado.textContent = "Por favor, insira seu nome completo.";
      return;
    }
  
    try {
      // URL do Google Apps Script (use a URL de implementação do seu script)
      const url = 'https://script.google.com/macros/s/AKfycbzIjI1_HinciDUe2C3Lg46MAkG27B17Ii4ZdPmV7qErx31FH1rFB14e2vM55fuUFgj8/exec'; // Coloque o ID do seu script aqui
  
      // Envia os dados para o Google Apps Script
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ nome: nomeCompleto }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Recebe a resposta do Google Apps Script
      const data = await response.json();
      
      // Exibe a resposta para o usuário
      if (data.status === 'success') {
        resultado.textContent = data.message; // Exibe "Presença confirmada!"
      } else {
        resultado.textContent = data.message; // Exibe "Nome não encontrado." ou erro
      }
    } catch (error) {
      console.error('Erro ao verificar presença:', error);
      resultado.textContent = "Erro ao verificar presença. Tente novamente mais tarde.";
    }
  }
  
  // Adiciona o evento ao formulário
  document.querySelector('form').addEventListener('submit', verificarPresenca);
  