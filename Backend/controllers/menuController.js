const menuItem = require("../models/MenuItem")

const getItems = async (req , res ,next)=>{
 try {
    const items = await menuItem.find();
    res.status(200).json({
        success:true,
        count: items.length,
        data:items
    });


 } catch (error) {
    next(error)
 }
    

};

const getItemById = async(req ,res,next)=>{
    try {
        const item = await menuItem.findById(req.params.id);
    if(!item) res.status(404).json({
        success:false,
        message:"Item Not Found",
    })

    res.status(200).json({
        success:true,
        data:item
    })
    } catch (error) {
        next(error)
    }
}
const createItem = async (req,res,next)=>{
    try {
        const createdItem = await menuItem.create(req.body);
        res.status(201).json({
            success:true,
            data:createdItem
        })
    } catch (error) {
        next(error)
    }
}
const updateItem = async (req ,res , next)=>{
    try {
        const updatedItem = await menuItem.findByIdAndUpdate(
            req.params.id ,
            req.body , {new:true}
        )
        if(!updateItem) res.status(404).json({
            success:false,
            message:"item not found"
        })
        res.status(200).json({
            success:true,
            data:updateItem
        })
    } catch (error) {
        next(error)
    }
}

const deleteItem = async (req,res ,next)=>{
    try {
        const deletedItem = await menuItem.findByIdAndDelete(req.params.id);
        if(!deletedItem) res.status(404).json({
            success:false,
            message:"item not found"
        })

        res.status(200).json({
            success:true,
            message:"item deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

module.exports ={
    getItems ,getItemById , createItem , updateItem , deleteItem
}