import { Schema, model} from "mongoose";
import User from "../interfaces/User";
/**
 * this file is based on the assunption that
 * the server/app already did mongoose.connect{...}
 * after first connction mongoose packadge saves
 * the isntance of the connection and then uses it
 * later on here and in any other schemas
 */
//צריך אחרי הפיתוח להחביא את השמות האמיתיים של המתשנים בדאתא בייס

interface testInterface {
  name:string
}

const schema = new Schema<testInterface>(
  {
   name: {
      type: String,
      required: true,
    },
  }
)

const testModel = model<testInterface>('T',schema)

const testRun = new testModel({
  name: 'string'
})

const testConnection = () => {
  testRun.save().then(
    data => {console.log(data)}
  ).catch(
    err => {console.log(err)}
  )

}

export {testConnection, testModel}
