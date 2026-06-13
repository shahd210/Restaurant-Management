const errorMiddleware = (err, req,res,next)=>{
    res.status(500).json({
        message:"Server Error" 
    })
}
module.exports = errorMiddleware;