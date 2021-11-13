import { Schema, model} from "mongoose";

interface IUser{
  Id: String,
  displayName: String,
  firstName: String,
  lastName: String,
  image: String,
  email: String,
  createdAt: Date,
}

/**
 * this file is based on the assunption that
 * the server/app already did mongoose.connect{...}
 * after first connction mongoose packadge saves
 * the isntance of the connection and then uses it
 * later on here and in any other schemas
 */
//צריך אחרי הפיתוח להחביא את השמות האמיתיים של המתשנים בדאתא בייס
const schema = new Schema<IUser>(
  {
    Id: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    email:{
      type:String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
)

const UserModel = model<IUser>('Users',schema) // the string is the name of the collection that this model will create and use in the db

const me = new UserModel({
  id:'exampleString',
  displayName: 'exampleString',
  firstName: 'exampleString',
  lastName: 'exampleString',
  image: 'exampleString',
  email:'exampleString',
})

const testConnection = () => {
  me.save().then(data =>{
      console.log(data);
      UserModel.findOneAndDelete({id:'exampleString'}) //writen without intelisense, need to be checked
  })
}

export {testConnection, UserModel}
