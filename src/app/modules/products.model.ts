import { Schema, model } from 'mongoose';
import { IInventory, IProduct, IVariant } from './products/products.interface';

const variantSchema = new Schema<IVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const inventorySchema = new Schema<IInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
})

productSchema.index({name:1 , description : 1 , category:1})
productSchema.pre('find' , async function(next){
  await this.model.updateMany({ "inventory.quantity": 0 }, { "inventory.inStock": false });
  await this.model.updateMany({ "inventory.quantity": { $gt: 0 } }, { "inventory.inStock": true });
  next();
})
productSchema.pre('findOne' , async function(next){
  await this.model.updateMany({ "inventory.quantity": 0 }, { "inventory.inStock": false });
  await this.model.updateMany({ "inventory.quantity": { $gt: 0 } }, { "inventory.inStock": true });
  next();
})

export const ProductModel = model<IProduct>('product' , productSchema)