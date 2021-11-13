import { Request, Response, Router } from "express";
import { searchVicationPackageRouter } from "../controllers/search_vication_package.controller";

const router:Router = Router()

router.get('/test' , searchVicationPackageRouter.testController)

export {router as searchVicationPackageRouter}