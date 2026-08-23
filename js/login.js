function entrar() {
  // Captura os valores dos campos
  const email = document.querySelector("#login input[type='email']").value;
  const senha = document.querySelector("#login input[type='text']").value;
  const escolha = document.querySelector("#login select").value;

  // Verifica se os campos foram preenchidos
  if (!email || !senha) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Verifica se é cliente ou barbearia
  if (escolha === "cliente") {
    window.location.href = "cliente.html";
  } else if (escolha === "barbearia") {
    window.location.href = "barbearia.html";
  } else {
    alert("Selecione uma opção válida!");
  }
}
