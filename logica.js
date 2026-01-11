document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('meuFormulario');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        } else if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        



        alert('Formulário enviado com sucesso!');
    });
});










   
    