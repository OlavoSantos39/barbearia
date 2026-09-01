function agendarServico() {
  // Pega os valores do formulário
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const servico = document.getElementById("servico").value;

  // Verifica se os campos estão preenchidos
  if (!data || !hora || !servico) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Cria um elemento para exibir o agendamento
  const agendamento = document.createElement("div");
  agendamento.classList.add("agendamento-item");
  agendamento.innerHTML = `
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Hora:</strong> ${hora}</p>
    <p><strong>Serviço:</strong> ${servico}</p>
    <hr>
  `;

  // Adiciona o agendamento na seção "Meus Agendamentos"
  document.getElementById("meus-agendamentos").appendChild(agendamento);

  // Mensagem de confirmação
  alert("Agendamento realizado com sucesso!");
  
  // Limpa o formulário
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("servico").value = "corte";
}

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
