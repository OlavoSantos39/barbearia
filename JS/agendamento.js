const form = document.getElementById("formAgendamento");

const lista = document.getElementById("listaAgendamentos");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const nome =
  document.getElementById("nome").value;

  const servico =
  document.getElementById("servico").value;

  const data =
document.getElementById("data").value;

  const hora =
  document.getElementById("hora").value;

  const item =
  document.createElement("li");

  item.innerHTML = `
    <strong>👤 ${nome}</strong><br>
    ✂️ ${servico}<br>
    📅 ${data}<br>
    ⏰ ${hora}
  `;

  lista.appendChild(item);

  form.reset();

});