import express from "express";
import { createNewAdmin, getAllAdmin, updateAdmin } from "../../Controllers/authController.js";

const router = express.Router();

router.get('/', getAllAdmin);

router.post('/', createNewAdmin);

router.put('/', updateAdmin)


export default router