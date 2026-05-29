//middleware factory (dynamic)
const authorizeRole = (...roles) /* rest operator*/ =>{
return (req ,res ,next)=>{
    if(!roles.includes(req.user.role)){
          return res.status(403).json({
                success:false,
                message:"Access denied"
            });
    }
    next();
}
}
module.exports = authorizeRole ;