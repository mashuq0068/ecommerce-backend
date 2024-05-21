import { NextFunction, Request, Response } from 'express';
import { orderServices } from './orders.service';
import OrderValidationSchema from './orders.validation';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const parsedOrder = OrderValidationSchema.parse(order);
    const result = await orderServices.createOrderIntoDB(parsedOrder);
    if (result === 'not-existed') {
      res.status(500).send({
        success: false,
        message:
          'You ordered wrong product.There is no product like your ordered product.',
      });
    } else if (result === 'not-available') {
      res.status(500).send({
        success: false,
        message: 'Insufficient quantity available in inventory.',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getOrders = async (req: Request, res: Response, next: NextFunction) => {
   try{const result = await orderServices.getOrdersFromDB()
    res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    } catch(error){
        next(error)
    }

};
export const orderControllers = {
  createOrder,
  getOrders
};
