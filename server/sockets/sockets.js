const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarmensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenidoo wey'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    ////escuchar cliente
    client.on('enviarmensaje', (data, callback) => {

        client.broadcast.emit('enviarmensaje', data);


        console.log(data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!'
        //     });
        // }
    });

});