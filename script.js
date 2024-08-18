function mostrarMensagem() {
    const digiteNome = document.getElementById('nomeInput').value;
    const digiteMensagem = document.getElementById('mensagem');
    const currentHour = new Date().getHours();
    let saudacao;

    if (currentHour < 12) {
        saudacao = 'Bom dia';
    } else if (currentHour < 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    if (digiteNome) {
        digiteMensagem.textContent = `${saudacao}, ${digiteNome}!`;
    } else {
        digiteMensagem.textContent = 'Por favor, insira seu digiteNome.';
    }
}