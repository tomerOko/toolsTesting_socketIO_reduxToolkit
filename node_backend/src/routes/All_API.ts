import { Router } from "express";
import { dealSearchRoutes } from "./deal_search_routes";

const rootRouter = Router()

rootRouter.use('/deal_search', dealSearchRoutes)
export {rootRouter}