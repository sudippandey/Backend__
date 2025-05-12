// classes and their prop
const cloudinarySvc =require ('../../services/cloudinary.service')
class Authcontroller {
  
  register = async (req, res, next) => {
   try {
    const data = req.body;
    data.image =  await cloudinarySvc.fileUpload(req.file.path,'/user/')
     res.json({
      data:data ,
      message: "register sucess",
      status: "Sucess",
      option: "",
    });
    
   } catch (exception) {
    next(exception)
   }
  };
  login = (req, res, next) => {
    let data = req.body
    res.json({
      data: data,
      message: "login sucess",
      status: "Sucess",
      option: "",
    });
  };

  
  activate = (req, res, next) => {
    res.json({
      data: "",
      message: "activate sucess",
      status: "Sucess",
      option: "",
    });
  };
  forgotpassword = (req, res, next) => {
    res.json({
      data: "",
      message: "forgot password ",
      status: "forgot_password",
      option: "",
    });
  };
  tokenverify = (req, res, next) => {
    let token = req.param.token
    res.json({
      data: token,
      message: "token verification sucess",
      status: "token verified",
      option: "",
    });
  };
  password_reset = (req, res, next) => {
    res.json({
      data: "",
      message: "password reset sucess",
      status: "password_reset",
      option: "",
    });
  };
  userprofile = (req, res, next) => {
    res.json({
      data: "",
      message: "user profile",
      status: "created user profile",
      option: "",
    });
  };
  updateuser = (req, res, next) => {
    res.json({
      data: "",
      message: "user update sucess",
      status: "user updated",
      option: "",
    });
  };
  logout = (req, res, next) => {
    res.json({
      data: "",
      message: "logout sucess",
      status: "Sucess",
      option: "",
    });
  };
}

module.exports = Authcontroller;
