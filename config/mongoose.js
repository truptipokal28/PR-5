const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/pr-5');
const Database = mongoose.connection;
Database.on('connected',(error)=>{
    if(error){
        console.log(error);
        return false;
    }
    else{
        console.log("Database Connected");
    }
})
module.exports = Database;