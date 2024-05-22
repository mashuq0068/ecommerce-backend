import { ProductModel } from './products.model';
import { IProduct } from './products.interface';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductsFromDB = async (searchedText?: string) => {
  if (searchedText) {
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: searchedText, $options: 'i' } },
        { category: { $regex: searchedText, $options: 'i' } },
        { description: { $regex: searchedText, $options: 'i' } },
      ],
    });

    return result;
  }
  const result = await ProductModel.find();
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

const updateSingleProductFromDB = async (id: string, updatedProduct: IProduct) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { $set: updatedProduct },
    { new: true , runValidators: true },
  );
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ _id: id });
  return result;
};


export const productServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};
