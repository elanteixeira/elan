 console.log("JS carregado!");

emailjs.init('3qMTnnSXSuJM9ihhs');
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Formulário capturado!"); // Teste

    const nome = this.elements['nome'].value;
    const email = this.elements['email'].value;
    const mensagem = this.elements['mensagem'].value;

    console.log("Valores:", nome, email, mensagem); // Teste

    emailjs.send('service_7mhnf88', 'template_urubbol', {
        from_name: nome,
        from_email: email,
        message: mensagem
    })
    .then(function(response) {
        alert('Email enviado com sucesso!');
        document.getElementById('formContato').reset();
    }, function(error) {
        alert('Erro ao enviar o email: ' + error.text);
        console.log('Erro:', error);
    });
});