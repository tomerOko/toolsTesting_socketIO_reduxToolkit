import { Request, Response, Router } from "express";
import { SearchControllers } from "../controllers/SearchController";

const router:Router = Router()

router.post('/search',SearchControllers.search)

router.get('/get_results',SearchControllers.get_results)


export {router as dealSearchRoutes}