import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts)
router.post("/add", createProduct)

export default router;