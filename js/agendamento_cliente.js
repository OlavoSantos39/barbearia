function agendar() {
    // Seleciona os elementos
    const selectBarbearia = document.getElementById("barb");
    const inputDia = document.querySelector("input[type='date']");
    const inputHora = document.querySelector("input[type='time']");
    const divRes = document.querySelector(".res");

    // Pega os valores
    const barbearia = selectBarbearia.options[selectBarbearia.selectedIndex].text;
    const dia = inputDia.value;
    const hora = inputHora.value;

    // Verifica se todos os campos foram preenchidos
    if (barbearia && dia && hora) {
        divRes.innerHTML = `
            <h3>✅ Agendamento Confirmado</h3>
            <p><strong>Barbearia:</strong> ${barbearia}</p>
            <p><strong>Dia:</strong> ${dia}</p>
            <p><strong>Hora:</strong> ${hora}</p>
        `;
    } else {
        divRes.innerHTML = "<p style='color:red;'>⚠️ Preencha todas as opções para confirmar o agendamento.</p>";
    }
}
