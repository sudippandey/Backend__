// classes and their prop
class Authcontroller {
  login = (req, res, next) => {
    res.json({
      data: "",
      message: "login sucess",
      status: "Sucess",
      option: "",
    });
  };

  register = (req, res, next) => {
    res.json({
      data: "",
      message: "register sucess",
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
