var socket = io();
////ON escuchar 
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('perdida conexion con el server');
});
//////emit enviar informacion
socket.emit('enviarmensaje', {
    usuario: 'jose',
    mensaje: 'que pedo'
}, function() {
    console.log('se disparo el callback');
});
/////escuchando informaccion
socket.on('enviarmensaje', function(mensaje) {
    console.log('servidor', mensaje);

});