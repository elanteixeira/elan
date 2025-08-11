 emailjs.send('service_7mhnf88', 'template_c5wp0bj', {
    from_name: nome,
    from_email: email,
    message: mensagem
}, 'user_3qMTnnSXSuJM9ihhs')
.then(function(response) {
    alert('Email enviado com sucesso!');
}, function(error) {
    alert('Erro ao enviar o email: ' + error.text);
});

