import { ProductModel } from '../products.model';
import { IProduct } from './products.interface';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateSingleDataFromDB = async (id: string, updatedProduct: any) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: updatedProduct },
    { new: true, runValidators: true },
  );
  return result;
};
export const productServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateSingleDataFromDB,
};
