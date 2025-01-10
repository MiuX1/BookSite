import asyncHandler from "../utils/asyncHandler.js"


const whishlist= asyncHandler(async(req,res) =>{
   res.status(200).json({
    message:"whishlist reconnected"
   })
})

export {whishlist}
