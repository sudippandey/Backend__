/* require('dotenv').config()
const appConfig = {
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey:process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
};

module.exports = {
    appConfig
} */
const SMTPConfig ={
    provider:process.env.SMTP_PROVIDER,
    host:process.env.SMTP_HOST,
    user :process.env.SMTP_USER,
    password:process.env.SMTP_PASSWORD,
    port :process.env.SMTP_PORT,
    from:process.env.SMTP_FROM
}


const Dbconfig ={

}

module.exports = {
    SMTPConfig
}