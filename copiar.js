function copiarTexto() {
    const texto = "Texto que você deseja copiar";
    
    // Usando a Clipboard API
    navigator.clipboard.writeText(texto).then(() => {
      alert('Texto copiado!');
    }).catch(err => {
      alert('Erro ao copiar: ' + err);
    });
  }