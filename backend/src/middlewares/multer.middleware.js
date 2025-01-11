import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})
// // import multer from "multer";
// // import path from "path";
// // import fs from "fs";

// // // Ensure the destination folder exists
// // const uploadDir = "./public/temp";
// // if (!fs.existsSync(uploadDir)) {
// //   fs.mkdirSync(uploadDir, { recursive: true });
// // }

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, uploadDir); // Set destination for uploaded files
// //   },
// //   filename: function (req, file, cb) {
// //     // Save the file with a unique timestamp to avoid name conflicts
// //     cb(null, `${Date.now()}-${file.originalname}`);
// //   },
// // });

// // export const upload = multer({ storage });


// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/temp"); // Define the temporary upload folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Save the file with its original name
//   }
// });

// export const upload = multer({ 
//   storage, 
// });