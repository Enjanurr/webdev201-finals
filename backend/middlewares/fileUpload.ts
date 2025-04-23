import multer from "multer";
import path from "path";

// Set up multer storage and file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profilePic/"); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    // Define the filename pattern (unique filename)
    const fileExt = path.extname(file.originalname); // Get file extension
    cb(null, `${Date.now()}-${file.fieldname}${fileExt}`); // Unique filename
  }
});
console.log("ngek")
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Check MIME type to allow only image files including SVG
    const allowedTypes = /jpeg|jpg|png|gif|svg/;
    const mimeType = allowedTypes.test(file.mimetype);

    if (mimeType) {
      return cb(null, true); // Accept file
    } else {
      cb(new Error("Only image files (jpeg, jpg, png, gif, svg) are allowed!")); // Reject file
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit (5MB)
});

export default upload;
