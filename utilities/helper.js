const fs = require('fs')
const randomStringGenerator = (length = 100) =>{
let character = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYXZ'
const len = character.length;
let random = ''
for (let i = 0; i<=length; i++){
    const posn= Math.ceil(Math.random()*(len-1))
    random += character[posn]
}
return random;


}
  const deleteFile=(filePath)=>{
    if(fs.existsSync(filePath)){
     fs.unlinkSync(filePath);
    }
    }
module.exports = {
    randomStringGenerator, 
    deleteFile
}


