import express from 'express';
const router = express.Router();

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id' ,getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
