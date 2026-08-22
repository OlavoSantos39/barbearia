// Função para mostrar a tela desejada
function mostrarTela(telaId) {
  // Oculta todas as telas
  const telas = document.querySelectorAll(".container > div, .container > form");
  telas.forEach(tela => {
    tela.style.display = "none";
  });

  // Mostra apenas a tela escolhida
  const tela = document.getElementById(telaId);
  if (tela) {
    tela.style.display = "block";
  }
}

// Inicializa mostrando apenas o login
window.onload = function () {
  mostrarTela("login");
};

// Função de login
function entrar() {
  const email = document.querySelector("#login input[type='text']").value;
  const senha = document.querySelector("#login input[type='password']").value;
  const escolha = document.getElementById("iescolha").value;

  if (email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (escolha === "1") {
    // Login Cliente
    if (email === "cliente@teste.com" && senha === "1234") {
        window.location.href = "agendamento.html";
    } else {
      alert("Email ou senha de cliente inválidos!");
    }
  } else if (escolha === "2") {
    // Login Barbearia
    if (email === "barbearia@teste.com" && senha === "1234") {
      // Aqui você pode redirecionar para a página da barbearia
      window.location.href = "barbearia.html";
    } else {
      alert("Email ou senha da barbearia inválidos!");
    }
  }
}

// Função de cadastro de cliente
function cadastrar() {
  const email = document.querySelector("#cadastro input[placeholder='Cadatre seu email']").value;
  const telefone = document.querySelector("#cadastro input[placeholder='Cadastre um telefone']").value;
  const senha = document.querySelector("#cadastro input[placeholder='Cadastre sua senha']").value;
  const confirmar = document.querySelector("#cadastro input[placeholder='Confirme sua senha']").value;

  if (!email || !telefone || !senha || !confirmar) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Cadastro de cliente realizado com sucesso!");
  mostrarTela("login");
}

// Função de redefinição de senha
function redefinir() {
  const email = document.querySelector("#senha input[type='email']").value;

  if (!email) {
    alert("Informe seu email!");
    return;
  }

  alert("Um link de redefinição foi enviado para " + email);
  mostrarTela("login");
}

// Links de navegação
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = this.getAttribute("href").substring(1);
    mostrarTela(destino);
  });
});
