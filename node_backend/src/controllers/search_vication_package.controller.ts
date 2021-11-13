import { Request, Response } from "express"

const testController = (req : Request, res:Response) => {
    res.send('test route - all good')
}

const searchVicationPackageRouter = {testController}
export {searchVicationPackageRouter}