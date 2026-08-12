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

//Função para a tela de login

function entrar() {
  // Captura os valores dos inputs
  const email = document.querySelector('#login input[type="text"]').value;
  const senha = document.querySelector('#login input[type="password"]').value;

  // Validação simples (você pode adaptar para validar com banco de dados ou API)
  
  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Exemplo de validação fixa (substitua por lógica real)
  const emailCorreto = "teste@barbershop.com";
  const senhaCorreta = "12345678";

  if (email === emailCorreto && senha === senhaCorreta) {
    // Redireciona para a página de agendamento
    window.location.href = "agendamento.html";
  } else {
    alert("Email ou senha inválidos!");
  }
}


function cadastrar() {
  window.alert("Cadastro realizado com sucesso!");
}

function redefinir() {
  window.alert("Um link de redefinição foi enviado para seu email!");
}
