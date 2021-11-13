import './config/loadEnvFirst'
import express, { Application, Request, Response, NextFunction } from "express";
import http from 'http';
import logging from './middleware/logging';
import cors from 'cors'
import rateLimiter from './middleware/rateLimiter'
import {connectNow} from  './config/monogoSercive'
import { rootRouter } from "./routes/All_API";
import session from'express-session'
import { sessionConfigs } from "./config/sessionConfigs";



//@desc load config file
//was imported from diffrent module in order to reun before this module

//@desc connect to mongo
connectNow ()
//@desc  mongoose connection this function have to be called after dotenv.config beacouse it is depeneds on propeties from process.env

//well.. :)
const app = express()

//@desc  express-rate-limit
app.use(rateLimiter);

//@desc session storage with express-sessions and mongo-sessions-connect
app.use(session(sessionConfigs));
 
//@desc cros env to make the browser not block requerst from diffrent port (domain = protocol+host+port. cors = diffrent domains)
//if serving the client as a static folder from the server, or if using nginx (or any other reverse proxy) thi part can be removed as well
const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));

// //@desc Static Folder 
// //'_dirname' means 'if the run command lunced from any directory other then the one containing this file, the use the absolute path of this file'
// app.use(express.static(path.join(__dirname, 'dist')))

//@desc json parser
app.use(express.json())
//@desc URLs matadata parser
app.use(express.urlencoded({extended : false}))



// @desc logging middleware (not for errors)
const NAMESPACE = 'Server';
app.use((req:Request, res:Response, next:NextFunction) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    next();
});

// @desc routers tree 
app.use('/' , rootRouter) 


// @desc logging middleware for errors
app.use((req, res, next) => {
  const error = new Error('Not found');
  res.status(404).json({
      message: error.message
  });
});


//@desc lunch the server and start listening on port (make sure the port in your hole deplotment stuff is eaqul to to port the massage below printing :-/ ) 
const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT, () => logging.info(NAMESPACE, `Server is running on default host :${process.env.PORT}`));












