import { Schema, model, IndexOptions} from "mongoose";
import Tenant from "../interfaces/Tenant";

/**
 * this file is based on the assunption that
 * the server/app already did mongoose.connect{...}
 * after first connction mongoose packadge saves
 * the isntance of the connection and then uses it
 * later on here and in any other schemas
 */
const schema = new Schema<Tenant>({
  CreatorsGoogleID: {
    type: String,
    required: true,
  },
  TE_Id: { //tenantId
    type: String,
    required: true,
  },
  TE_N: {//tenantName
    type: String,
    required: true,
  },
  TE_PN: {//phoneNumber
    type: String,
    required: true,
  },
  TE_AD: {//tenantAddress
    type: String,
    required: false,
  },
  TE_FD: {//financialDebt
    type: Number,
    required: false,
    default:0,
  }
})

const TenantModel = model<Tenant>('TE',schema)

const testConnection = () => {
  try {
    new TenantModel({
      CreatorsGoogleID: 'String',
      TE_Id: 'String',
      TE_N: 'String',
      TE_PN: 'String',
      TE_AD: 'String',
      TE_FD: 3
    }).save().then(data =>{
      console.log(data);
      console.log(5)
  }).catch(e => {console.log(e)})
  } catch (error) {
    console.log("=================================;")
    console.log(error)
  }

}


//unique inforcment indexes
const op = { unique: true }
schema.index({CreatorsGoogleID:1, TE_N:-1},(op as IndexOptions))

//quering efficency indexes
schema.index({TE_Id:1})

TenantModel.createIndexes ()

export {testConnection, TenantModel}
