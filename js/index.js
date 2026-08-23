// Função para mostrar uma tela com transição de 1 segundo
function mostrarTela(idTela) {
  // Esconde todas as telas
  const telas = document.querySelectorAll("form");
  telas.forEach(tela => {
    tela.style.opacity = 0;
    tela.style.display = "none";
  });

  // Mostra a tela desejada após 1 segundo
  setTimeout(() => {
    const tela = document.getElementById(idTela);
    tela.style.display = "block";
    tela.style.opacity = 0.9;
  }, 100);
}

// Captura todos os links que apontam para telas
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const idTela = this.getAttribute("href").substring(1);
    mostrarTela(idTela);
  });
});

// Inicialmente mostra apenas a tela de login
mostrarTela("login");
