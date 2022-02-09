import express from "express";
import path from "path";
// import dotenv from 'dotenv'
import 'dotenv/config'

const app = express();
const port = process.env.Port; // port
// Configure Express to use EJS

app.get("/", ( req, res ) => {
    // tslint:disable-next-line:no-console
      console.log("server alive");
} );
// define a route handler for the default home page
app.get( "/echo", ( req, res ) => {
  // tslint:disable-next-line:no-console
    console.log("server alive echo ");
} );





// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
