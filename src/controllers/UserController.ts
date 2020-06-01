import {Response, Request} from 'express'

const UserController = {
    async index(req: Request, res: Response){
        return res.send('Olá Mundo')
    }
}

export default UserController;