import { OrderModel } from '../orders.model';
import { ProductModel } from '../products.model';
import IOrder from './orders.interface';

const createOrderIntoDB = async (order: IOrder) => {
  const existedProduct = await ProductModel.findById(order?.productId);
  if (!existedProduct) {
    return "not-existed";
  }
  if(existedProduct.inventory.quantity < order.quantity){
    return "not-available"
  }
  await ProductModel.findByIdAndUpdate(order.productId , {$inc:{"inventory.quantity" : -order?.quantity}})
  const result = await OrderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};
