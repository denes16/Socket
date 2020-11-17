const {io} = require('../server');
io.on('connection', (client) =>{

    console.log('Usuario conectado');

    client.on('disconnect',() =>{
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje',(data) => {
        console.log(data);
        // if(data.usuario)
        // {
        //     callback({
        //         msg:'Todo salió bien'
        //     });
        // }
        // else
        // {
        //     callback({
        //         msg:'Todo salió muy malllllllllll'
        //     });
        // }
        client.broadcast.emit('msg',data);
    });
    client.emit('msg',{
        from:'server',
        msg:'Welcome'
    });

});