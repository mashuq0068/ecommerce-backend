import express from  "express"
import { productControllers } from "./products.controllers"

const router = express.Router()

router.post('/' , productControllers.createProduct)
router.get('/' , productControllers.getProducts)
router.get('/:productId' , productControllers.getSingleProduct)
router.put('/:productId' , productControllers.updateSingleProduct)

export const productRoutes = router