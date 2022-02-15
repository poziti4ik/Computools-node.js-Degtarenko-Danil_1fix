import { createServer } from "http";
import { Server } from "socket.io";

function soket(app: any){
 const httpServer = createServer(app);
 const io = new Server(httpServer,{});

io.on('connection', (socket) => {
   console.log('A user connected');

   // Whenever someone disconnects this piece of code executed
   socket.on('disconnect',()=> {
      console.log('A user disconnected');
   });
});

httpServer.listen( 8080, () => {

    console.log( `http://localhost:8080/` );
} );
}
export {soket}
