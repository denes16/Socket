
          var socket = io();

          socket.on('connect', function(){
              console.log('Conectado al servidor');
          });
          socket.on('disconnect', function(){
              console.log('Perdimos conexión con el servidor');
          });
          // Send
          socket.emit('enviarMensaje',{
              usuario: 'Denes',
              msg:'Hello'
          });
          socket.on('msg',function(d){
              console.log(d);
          });