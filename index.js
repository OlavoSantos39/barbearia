// Função para mostrar apenas a tela desejada
function mostrarTela(telaId) {
  // Lista de todas as telas
  const telas = ["login", "cadastro", "senha"];

  // Esconde todas
  telas.forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  // Mostra apenas a escolhida
  document.getElementById(telaId).style.display = "block";
}

// Inicializa mostrando apenas login
window.onload = function() {
  mostrarTela("login");
};

// Captura os cliques nos links
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const telaId = this.getAttribute("href").substring(1);
    mostrarTela(telaId);
  });
});
