// Funções para abrir e fechar modais
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

  // Fechar modal ao clicar fora do conteúdo
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };