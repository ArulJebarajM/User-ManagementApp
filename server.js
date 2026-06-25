const express = require('express');
const userManagementApp = express();

userManagementApp.use(express.json());
userManagementApp.use(express.urlencoded({ extended: true }));


const connectdb=require('./config/db');
connectdb();


userManagementApp.use('/register', (req, res, next) => {
    const userToken=req.headers.authorization;
    if(userToken==="secretToken07"){
        next(); 
    }else{
        res.status(401).json({ error: "Unauthorized" });
    }
});

const adminmiddleware=(req,res,next)=>{
    const userrole=req.headers.role;
    if(userrole==="admin"){
        next();
    }
    else{
        res.status(403).json({ error: "Forbidden access" });
    }
}




const User = require('./models/user'); // make sure path is correct

// Save new user to MongoDB
userManagementApp.post('/register', adminmiddleware, async (req, res) => {
    try {
        const userdata = req.body;
        const newUser = await User.create(userdata);   // <-- saves to MongoDB
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users from MongoDB
userManagementApp.get('/register', adminmiddleware, async (req, res) => {
    try {
        const users = await User.find();   // <-- fetches from MongoDB
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update user in MongoDB
userManagementApp.put('/register/:name', async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { name: req.params.name },          // find by name
            { age: req.body.age },              // update age
            { new: true }                       // return updated document
        );

        if (updatedUser) {
            res.status(200).json({ message: "User updated successfully", user: updatedUser });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


userManagementApp.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});


userManagementApp.listen(3000, () => {
    console.log('User management app is running on port 3000');
});