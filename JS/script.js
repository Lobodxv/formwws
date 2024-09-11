const script_do_google = 'https://script.google.com/macros/s/AKfycbwMXVBKL74DkyHNvV-k5BmlO921E9hhyS1JL6ImzTANTPKbHh_nqI0cm9T4RFZBaW8qxA/exec';
const dados_do_formulario = document.forms['formPedidos'];

dados_do_formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(script_do_google, {method: 'POST', body: new FormData(dados_do_formulario) })
  .then(response => {
    //  Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
    alert('Pedido efetuado com sucesso!', response);
    dados_do_formulario.reset();
  })
  .catch(error => 
    // Se houver erro no envio, a mensagem abaixo será exibida
    console.error('Erro no envio do pedido!', error));
  });