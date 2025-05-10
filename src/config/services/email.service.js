const nodemailer = require('nodemailer')
const{SMTPCONFIG} = require('../')


class EmailService{

    #transport;
    constructor(){
        try{



        }
        catch(exception){
                throw{message:"SMTP server connecton failed...", status:"SMTP_CONNECTION_ERR"
                }
        }
    }
}
const emailsvc = new EmailService()
module.exports = emailsvc