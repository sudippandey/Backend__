const app = require('express').Router()
const Auth_router = require('../config/module/auth/auth.router')

app.use('/auth', Auth_router )

module.exports = app

