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

  const inputTelefone = document.getElementById('telefone');

  inputTelefone.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (valor.length > 11) valor = valor.slice(0, 11); // Limita o tamanho máximo

    // Aplica a máscara de acordo com a quantidade de dígitos
    if (valor.length > 10) {
      // Celular com 9 dígitos: (86) 99999-9999
      valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (valor.length > 5) {
      // Formatação parcial para celular/fixo
      valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (valor.length > 2) {
      // Formatação parcial para DDD
      valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (valor.length > 0) {
      valor = valor.replace(/^(\d*)/, '($1');
    }
  })