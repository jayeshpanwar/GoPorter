import express from "express";

const router = express.Router();
//to link controller on router file
import * as categoryController from "../controller/category.controller.js";

router.post("/save",categoryController.save);
router.get("/fetch",categoryController.fetch);
router.delete("/delete", categoryController.deleteCategory);

export default router;