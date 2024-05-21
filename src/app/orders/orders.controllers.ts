import { NextFunction, Request, Response } from 'express';
import { orderServices } from './orders.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const result = await orderServices.createOrderIntoDB(order);
    if (result === 'not-existed') {
      res.status(500).send({
        success: false,
        message:
          'You ordered wrong product.There is no product like your ordered product.',
      });
    } else if (result === 'not-available') {
      res.status(500).send({
        success: false,
        message:
          'Insufficient quantity available in inventory.',
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

export const orderControllers = {
  createOrder,
};
