require('dotenv').config();
const express = require("express");
const router = express.Router();
const mongoose = require ("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const {JWT_SECRET} = require("../keys");
const requireLogin = require("../middleware/requireLogin");

// router.get("/protected", (req, res)=>{
//     res.send("Hello Protected User");
// });

router.get("/protected", requireLogin, (req, res)=>{
    res.send("You've entered a protected path.")
})

router.get("/", (req, res)=>{
    res.send("Hello");
});

router.post("/signup", (req, res)=>{
    // res.send("signup");
    const {name, email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({error: "please add all the fields."})
    }
    User.findOne({email: email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error: "User with this email already exists."})
        }
            bcrypt.hash(password, 12)
            .then((hashedpassword)=>{
                const user = new User({
                    email,
                    password: hashedpassword, 
                    name
                });
                user.save()
                .then((savedUser)=>{
                    return res.json({message: "User Successfully Saved."})
                })
                .catch((err)=>{
                    console.log(err);
                })
            })
               
    })
});

router.post("/signin", (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(422).json({error:"Please add email or password."})
    }
    User.findOne({email: email})
    .then((savedUser)=>{
        if(!savedUser){
            res.status(422).json({error:"Invalid email or password."})
        }
        bcrypt.compare(password, savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
                // res.json({message: "User successfully signed in."})
                const token = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET);
                const {_id, name, email} = savedUser
                res.json({token, user:{_id, name, email}});
            }
            else{
                res.status(422).json({error:"Invalid email or password."})
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    })
});


module.exports = router;