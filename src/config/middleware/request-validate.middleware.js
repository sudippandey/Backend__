const bodyValidator = (schema)=>{
    return async (req,res,next)=>{
try {
    const data = req.body;
    if(!data){
        next({
            code:422,
            message:"empty payload...",
            status:"UNPROCESSABLE_ENTITY"

        })
    }
    await schema.validateAsync(data,{abortEarly:false})//this abortearly flag don't end the process in inital phase
    next()
} 
catch (exception) {
    //  console.log(exception)

    //400=>with detail and messagebag and 422 =>without detail like token verification failed
    let messagebag = {}
    exception.details.map((error)=>{
        let key = error.path.pop()
        messagebag[key]=error.message
        // console.log(error);
        

    })
    next({
        code:400,
        detail:messagebag,
        message:'Validation Failure',
        status:'Validation_Failed'
    })
}
}

}
module.exports = bodyValidator



