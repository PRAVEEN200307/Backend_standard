import multer from 'multer';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
+        cb(null, path.join(__dirname, '../uploads'))
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedType = ["image/png", "image/jpeg", "image/jpg", "application/pdf"];
    if (allowedType.includes(file.mimetype)) {
        return cb(null, true)
    } else {
        return cb(new Error("File type not supported"), false);
    }
};

export const upload = multer({ storage, fileFilter });    