import { NextFunction, Request, Response } from 'express';
import { productServices } from './products.service';
import ProductValidationSchema from './products.validation';

// create a product
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

// get all products
const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.query.searchTerm) {
      const searchedText = req.query.searchTerm
      const result = await productServices.getProductsFromDB(searchedText as string);
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
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

// get a single product by Id
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

// update a single product
const updateSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updatedProduct = req.body;
    const parsedUpdatedProduct = ProductValidationSchema.parse(updatedProduct)
    const id = req.params.productId;
    const result = await productServices.updateSingleProductFromDB(
      id,
      parsedUpdatedProduct,
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


// delete a single products
const deleteSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.productId;
    const result = await productServices.deleteSingleProductFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
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
  updateSingleProduct,
  deleteSingleProduct,
};
