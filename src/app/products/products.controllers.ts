import { NextFunction, Request, Response } from 'express';
import ProductValidationSchema from './products.validation';
import { productServices } from './products.service';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = req.body;
    const parsedProduct = ProductValidationSchema.parse(product);
    const result = await productServices.createProductIntoDB(parsedProduct);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productServices.getProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updatedProduct = req.body
    const id = req.params.productId;
    const result = await productServices.updateSingleDataFromDB(
        id,
        updatedProduct
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const productControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct
};
