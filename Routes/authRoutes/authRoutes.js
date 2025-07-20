import express from "express";
import { createNewAdmin, getAllAdmin, updateAdmin } from "../../Controllers/authController.js";
import { upload } from "../../middleware/uploadMiddleware.js";

const router = express.Router();

router.get('/', getAllAdmin);
router.get('/:id', getAllAdmin);


router.post('/',upload.fields([{name:'image', maxCount:1},{name:'document',maxCount:1}]) ,createNewAdmin);

router.put('/:id', updateAdmin)


export default router