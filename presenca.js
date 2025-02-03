const tratarNome = (nome) => {
  return nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
};

async function verificarPresenca(event) {
  event.preventDefault(); // Impede o recarregamento da página

  const nomeCompleto = document.getElementById('name').value.trim();
  const resultado = document.getElementById('resultado');

  if (!nomeCompleto) {
    resultado.textContent = "Por favor, insira seu nome completo.";
    return;
  }

  const nomeTratado = tratarNome(nomeCompleto);

  try {
    // URL do proxy (substitua pelo endereço do seu proxy)
    const url = 'https://proxy-site-q4yqm1m38-lucas-gabryels-projects.vercel.app';

    // Envia os dados para o proxy
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ nome: nomeTratado }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Adicionando log para verificar o conteúdo da resposta
    const data = await response.json();
    console.log(data); // Verifique a resposta do servidor

    // Exibe a mensagem de confirmação ou erro
    if(data.message == "Presença confirmada!") {
      resultado.classList.add("positive")
    } else {
      resultado.classList.remove("positive")
    }

    resultado.textContent = data.message;  // Aqui usamos data.message, que vem do JSON retornado
  } catch (error) {
    console.error('Erro ao verificar presença:', error);
    resultado.textContent = "Erro ao verificar presença. Tente novamente mais tarde.";
  }
}

// Adiciona o evento ao formulário
document.querySelector('form').addEventListener('submit', verificarPresenca);
