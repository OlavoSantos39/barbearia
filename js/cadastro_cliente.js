function cadastrarCliente() {
  // Captura os valores dos campos
  const email = document.getElementById("iemail").value.trim();
  const usuario = document.getElementById("iusuario").value.trim();
  const telefone = document.getElementById("itel").value.trim();
  const senha = document.getElementById("isenha").value.trim();
  const confirmarSenha = document.querySelector("#cadastro-cliente input[placeholder='Confirme sua senha']").value.trim();

  // Validações básicas
  if (!email || !usuario || !senha || !confirmarSenha) {
    alert("Por favor, preencha todos os campos obrigatórios!");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Cria objeto cliente
  const cliente = {
    email: email,
    usuario: usuario,
    telefone: telefone,
    senha: senha
  };

  // Simulação de cadastro (armazenando no localStorage)
  localStorage.setItem("cliente_" + usuario, JSON.stringify(cliente));

  alert("Cadastro realizado com sucesso para o cliente: " + usuario);

  // Opcional: redirecionar para tela de login
  window.location.href = "#login";
}
