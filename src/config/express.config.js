const express = require('express')
const router = require('./router.config')
const app = express()
const {deleteFile} = require('../../utilities/helper')
app.use(express.json({
    limit: "10mb",
})); //this is used to receive data send in json format
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',router)

app.use((req,res,next)=>{
   
    next({
        error:null,
        message:"Resource not found",
        status:'Not found',
        option:''
        })
    })

    app.use((error,req,res, next)=>{
            let code = error.code || 500
            let detail = error.detail || null
            let message = error.message || 'Internal server error'
            let status = error.status || "server error"
            
           //file delete 
            if (req.file){
                deleteFile(req.file.path)
             }
             else if(req.files) {
                 req.files.foreach((file)=>{
                    deleteFile(file.path) 
                 })
             }


        res.status(code).json({
            error: detail,
            message : message,
            status: status,
            option:null
        })
    })

module.exports = app