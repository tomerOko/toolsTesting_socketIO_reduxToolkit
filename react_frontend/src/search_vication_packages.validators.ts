import Ajv from "ajv"
import schema from './types/schemas/search_vication_packages.schemas.json'
const ajv = new Ajv()
ajv.addSchema(schema);
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateISuccessfulBodyOfSearchVicationPackages = ajv.getSchema("#/definitions/ISuccessfulBodyOfSearchVicationPackages") as Ajv.ValidateFunction ;
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateIAccommodations = ajv.getSchema("#/definitions/IAccommodations") as Ajv.ValidateFunction ;
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateIQueryRequestBody = ajv.getSchema("#/definitions/IQueryRequestBody") as Ajv.ValidateFunction ;
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateIQuery = ajv.getSchema("#/definitions/IQuery") as Ajv.ValidateFunction ;
export {validateISuccessfulBodyOfSearchVicationPackages, validateIAccommodations, validateIQueryRequestBody, validateIQuery}


