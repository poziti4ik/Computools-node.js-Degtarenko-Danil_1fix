import express from "express";
import path from "path";
import 'dotenv/config';
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();
const port = process.env.Port;

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get("/", ( req, res ) => {
      console.log("server alive");
      res.render("index");
} );

io.on('connection', (socket) => {
   console.log('A user connected');

   // Whenever someone disconnects this piece of code executed
   socket.on('disconnect',()=> {
      console.log('A user disconnected');
   });
});

app.get( "/echo", ( req, res ) => {
    console.log("server alive echo ");
} );

httpServer.listen( port, () => {

    console.log( `server started at http://localhost:${ port }` );
} );
