import express from "express";
import path from "path";
import 'dotenv/config';

const app = express();
const port = process.env.Port;

app.get("/", ( req, res ) => {

      console.log("server alive");
} );

app.get( "/echo", ( req, res ) => {
    console.log("server alive echo ");
} );

app.listen( port, () => {

    console.log( `server started at http://localhost:${ port }` );
} );
