import express from "express";
import path from "path";
import 'dotenv/config';
import {soket} from "./soket";

const app = express();
const port = process.env.Port;

soket(app);
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get("/", ( req, res ) => {
      console.log("server alive");
      res.render("index");
} );

app.get( "/echo", ( req, res ) => {
    console.log("server alive echo ");
} );
