import { Router } from "express";
import { searchVicationPackageRouter } from "./search_vication_package.router";

const rootRouter = Router()

rootRouter.use('/search_vication_package', searchVicationPackageRouter)
export {rootRouter}