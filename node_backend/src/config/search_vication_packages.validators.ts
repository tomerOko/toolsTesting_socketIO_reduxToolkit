/**
 * this hole file is in config insted of 'types' becouse 'types' is a shared directory between client src and server src. 
 * and in this file there are needed difrences between the two, so it casted out and moved to config
 */

import Ajv from "ajv"
import { AnyValidateFunction } from "ajv/dist/core";
import schema from '../types/schemas/search_vication_packages.schemas.json'
const ajv = new Ajv()
ajv.addSchema(schema);
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateISuccessfulBodyOfSearchVicationPackages = ajv.getSchema("#/definitions/ISuccessfulBodyOfSearchVicationPackages") as AnyValidateFunction  ;
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateIAccommodations = ajv.getSchema("#/definitions/IAccommodations") as AnyValidateFunction ;
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateIQueryRequestBody = ajv.getSchema("#/definitions/IQueryRequestBody") as AnyValidateFunction ;
/**
 * ### JSON.parse(response) 
 * only then validate it
 */
const validateIQuery = ajv.getSchema("#/definitions/IQuery") as AnyValidateFunction ;
export {validateISuccessfulBodyOfSearchVicationPackages, validateIAccommodations, validateIQueryRequestBody, validateIQuery}


