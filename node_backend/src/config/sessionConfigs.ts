import session, { SessionOptions } from 'express-session'
import { IAccommodationInSessionStorage } from '../interfaces/SearchResult';
import { IsearchQuery } from '../interfaces/seqrchQuery';

declare module 'express-session' { // a code i copy, it lets u declare type to req.session
  export interface SessionData {
    results : IAccommodationInSessionStorage [],
    //** in case new search was fire from the client, and some of the old result still arriving */
    searchId: string,
    numberOfQueries : number,
    isDone:boolean
  }
}

//@Desc a db communication mechanism thats saves the session storage of requests in order to make it persistant
// use req.session.<object name> = <object value> just like 'express-session'
// use req.session.save() to save the memory data into db, otherwise, it will happand uthomaticaly on res.send()
const connectMongoDBSession = require('connect-mongodb-session')(session);

//@Desc store instance (only one connection is needed)
const store = new connectMongoDBSession({
  uri: process.env.MONGO_URI, 
  collection: process.env.MONGO_SESSIONS_COLLECTION_NAME
});

//@Desc error loging
store.on('error', function(error) {
  console.log(error);
});

const sessionConfigs : SessionOptions= {
    secret: process.env.SESSION_PASSWORD as string,
    cookie: {
      maxAge: 1000 * 60 * 60 * 3,
      httpOnly: true, 
      sameSite: 'lax' // sinse mid 2020 browser began blocking third party cookie even if allowed by destenaion server, so it is better be seen here
      // secure: false
    },
    proxy:true,
    store: store,
    resave: false,
    saveUninitialized: true // save 
}

export {sessionConfigs}