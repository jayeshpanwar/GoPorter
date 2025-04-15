import express from "express";
import enterprisesSchemaModel from "./enterprises.model.js";

const router = express.Router();

// Route: POST /api/enterprises/save
router.post("/save", async (req, res) => {
    try {
        const enterprise = new enterprisesSchemaModel(req.body);
        await enterprise.save();
        res.status(201).send({ success: true, message: "Enterprise saved successfully!" });
    } catch (error) {
        console.error("Error saving enterprise:", error);
        res.status(500).send({ success: false, message: "Error saving enterprise", error });
    }
});

export default router;
