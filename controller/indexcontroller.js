const Record = require('../models/schema');
const index = (req,res) => {
    return res.render('index');
}
const insertData = (req,res) => {
    const { name, description, price } = req.body;
    let image = "";

    if (req.file) {
        image = req.file.path;
    }
    Record.create({
        image: image,
        name: name,
        description: description,
        price: price
    }).then((success) => {
        console.log("Data inserted successfully");
        return res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })
}
const viewData = (req,res) => {
    Record.find({}).then((success)=>{
        return res.render('view',{
            success
        });
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}
const deleteData = (req,res) => {
    let id = req.query.id;
    Record.findByIdAndDelete(id).then((success)=>{
        console.log("Record Deleted");
        return res.redirect('back');
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}
const editData = (req,res) =>{
    let id = req.query.id;
    Record.findById(id).then((success)=>{
        return res.render('edit',{
            single : success
        })
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}
const updateData = (req,res) => {
    const{name,description,price} = req.body;
    let editid = req.body.editid;
    Record.findByIdAndUpdate(editid,{
        name : name,
        description : description,
        price : price
    }).then((success)=>{
        console.log("Record Updated");
        return res.redirect('/viewData');
    }).catch((error)=>{
        console.log(error);
        return false;
    })
}
module.exports = {
    index,
    insertData,
    viewData,
    deleteData,
    editData,
    updateData
}