const Router = require("express")
const User = require("../db/User")
const path = require('path');
const fileUpload = require('express-fileupload');
// const fs = require("fs");
// const Uuid = require("uuid");
const router = new Router()
const bcrypt = require('bcryptjs');
const {check, validationResult} = require("express-validator")
// const config = require("config")

const jwt = require('jsonwebtoken');


// registration
router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer than 3 and shorter than 12").isLength({min: 3, max: 12})
    ],
    async (req, res) => {

        try {
            console.log(req.body)

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }


            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `User with email ${email} already exist`})
            }

            const hashPassword = await bcrypt.hash(password, 8)

            const user = new User({email, password: hashPassword})

            await user.save();
            return res.json({message: "User was created"})

        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
)