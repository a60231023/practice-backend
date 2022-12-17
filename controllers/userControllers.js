const User = require("../models/userModel");

exports.home = (req,res) => {
    res.send("Hello from Ayush Tiwari, learning backend");
};

exports.createUser = async (req,res) => {
    try{
        const {name, email} = req.body;
        //checking the details 
        if(!name || !email){
            throw new Error("Name and Email are required");
        }
        const userExists = await User.findOne({email});
        if(userExists){
            throw new Error("User already exists");
        }

        //Inserting into the databse
        const user = User.create({name, email});
        res.status(201).json({
            success: true,
            message: "User created succesfully",
            user,
        });
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(401).send("user already present");
    }
};