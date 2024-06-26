import { OrderModel } from './orders.model';
import { ProductModel } from '../products/products.model';
import IOrder from './orders.interface';

const createOrderIntoDB = async (order: IOrder) => {
  const existedProduct = await ProductModel.findById(order?.productId);
  // if product id given wrong and product not existed
  if (!existedProduct) {
    return 'not-existed';
  }
  // if the ordered quantity exceeds the available quantity
  if (existedProduct?.inventory?.quantity < order?.quantity) {
    return 'not-available';
  }

  // if everything ok then order will be crated
  const result = await OrderModel.create(order);
  // after creating an order product quantity will be changed
  await ProductModel.findByIdAndUpdate(order.productId, {
    $inc: { 'inventory.quantity': -order?.quantity },
  });
  return result;
};

const getOrdersFromDB = async (email?: string) => {
  if (email) {
    const result = await OrderModel.find({ email: email });
    return result;
  }
  const result = await OrderModel.find();
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getOrdersFromDB,
};
