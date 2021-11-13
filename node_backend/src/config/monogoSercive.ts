import mongoose from 'mongoose'

const connectNow = () =>{
  mongoose.connect(`${process.env.MONGO_URI}`,{
    useNewUrlParser: true,
    useCreateIndex: true,
}).then( connection => {
  console.log('Connected to AppDB.')
}).catch((error) => {
  console.log(error)
  process.exit(1)
})
}

export {connectNow}