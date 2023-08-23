
const express = require('express');
const fs = require('fs');
const multer = require('multer')
const routes = express.Router();
const controller = require('../controller/indexcontroller');
const file = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const imagedata = multer({ storage: file }).single('image');
routes.get('/',controller.index);
routes.post('/insertData',imagedata,controller.insertData);
routes.get('/viewData',controller.viewData);
routes.get('/deleteData',controller.deleteData);
routes.get('/editData',controller.editData);
routes.post('/updateData',imagedata,controller.updateData);
module.exports = routes;
