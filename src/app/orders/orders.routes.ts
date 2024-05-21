import express from 'express';
import { orderControllers } from './orders.controllers';
const router = express.Router();
router.post('/' , orderControllers.createOrder)


export const orderRoutes =  router
