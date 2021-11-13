import session, { CookieOptions, SessionOptions } from 'express-session'

declare module 'express-session' { // a code i copy, it lets u declare type to req.session
  export interface SessionData { }//** place to define the session storage data type */  
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
store.on('error', (error) => {console.log(error)});

const cookieOptions : CookieOptions = {
  maxAge: 1000 * 60 * 60 * 3,
  httpOnly: true, 
  sameSite: 'lax' // sinse mid 2020 browser began blocking third party cookie even if allowed by destenaion server, so it is better be seen here
  // secure: false
}

const sessionConfigs : SessionOptions= {
    secret: process.env.SESSION_PASSWORD as string,
    cookie: cookieOptions,
    proxy:true,
    store: store,
    resave: false,
    saveUninitialized: true // save 
}

export {sessionConfigs}