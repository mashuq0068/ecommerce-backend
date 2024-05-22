import { NextFunction, Request, Response } from 'express';
import { orderServices } from './orders.service';
import OrderValidationSchema from './orders.validation';

// creating an order
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const parsedOrder = OrderValidationSchema.parse(order);
    const result = await orderServices.createOrderIntoDB(parsedOrder);
    // if product id given wrong and product not existed
    if (result === 'not-existed') {
      res.status(500).send({
        success: false,
        message:
          'You ordered wrong product.There is no product like your ordered product.',
      });

      // if the ordered quantity exceeds the available quantity
    } else if (result === 'not-available') {
      res.status(500).send({
        success: false,
        message: 'Insufficient quantity available in inventory.',
      });
    }
    // if everything is ok
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// get all orders
const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.query.email
    // here email is option , so if email given then data will come according email, or not all data will come
    const result = await orderServices.getOrdersFromDB(email as string); 
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const orderControllers = {
  createOrder,
  getOrders,
};
