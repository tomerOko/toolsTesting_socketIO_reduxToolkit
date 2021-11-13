import dotenv from 'dotenv'

//@desc  load config file, it is in other file becouse other HOISTED imports depend on this env propeties, so in order to be hoisted as well - it is placed in another module
dotenv.config({path: "/app/src/config/configs.env"});
