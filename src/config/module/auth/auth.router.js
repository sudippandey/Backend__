// all router
const router= require('express').Router()
 const Authcontroller = require('./auth.controller')
 const auth_controller = new Authcontroller

router.post ('/login',auth_controller.login)
router.post('/register',auth_controller.register)
router.post('/activate',auth_controller.activate)
router.post('/forgot-password',auth_controller.forgotpassword)
router.post('/token-verify:token',auth_controller.tokenverify)
router.put('/password-reset',auth_controller.password_reset)
router.get('/user-profile',auth_controller.userprofile)
router.get('/logout',auth_controller.logout)
router.put('/update-user',auth_controller.updateuser)


 module.exports = router