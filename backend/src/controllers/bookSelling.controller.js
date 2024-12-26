import asyncHandler from "../utils/asyncHandler.js"


const bookSelling= asyncHandler(async(req,res) =>{
   res.status(200).json({
    message:"book selling reconnected"
   })
})

export {bookSelling}

