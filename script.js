 // Inicialize o EmailJS com seu User ID
emailjs.init('user_3qMTnnSXSuJM9ihhs');

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.elements['nome'].value;
    const email = this.elements['email'].value;
    const mensagem = this.elements['mensagem'].value;

    emailjs.send('service_7mhnf88', 'template_c5wp0bj', {
        from_name: nome,
        from_email: email,
        message: mensagem
    }, 'user_3qMTnnSXSuJM9ihhs')
    .then(function(response) {
        alert('Email enviado com sucesso!');
        // Opcional: limpar o formulário após o envio
        document.getElementById('formContato').reset();
    }, function(error) {
        alert('Erro ao enviar o email: ' + error.text);
    });
});
