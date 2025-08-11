 emailjs.init('your_public_key_xxx');

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = this.elements['nome'].value;
    const email = this.elements['email'].value;
    const mensagem = this.elements['mensagem'].value;

    emailjs.send('service_7mhnf88', 'template_c5wp0bj', {
        from_name: nome,
        from_email: email,
        message: mensagem
    })
    .then(function(response) {
        alert('Email enviado com sucesso!');
        document.getElementById('formContato').reset();
    }, function(error) {
        alert('Erro ao enviar o email: ' + error.text);
    });
});
