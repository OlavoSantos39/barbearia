function atualizarPerfil() {
  // Captura os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;

  if (!nome || !email || !tel) {
    alert("Por favor, preencha todos os campos do perfil!");
    return;
  } else
  window.alert("Atualizado com sucesso!")
}
