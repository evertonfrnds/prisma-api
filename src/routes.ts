import express from 'express';

import UserController from './controllers/UserController';

const routes = express.Router()

routes 
    .get('/', UserController.index)

export default routes;