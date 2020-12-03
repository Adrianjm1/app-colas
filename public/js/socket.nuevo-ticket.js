var socket = io();


var label = $('#lblNuevoTicket')
socket.on('connect', () => {

    console.log('Conectado al servidor');
});


socket.on('disconnect', () => {

    console.log('desconectado del servidor');
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual)
    console.log(resp);
})


$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
})