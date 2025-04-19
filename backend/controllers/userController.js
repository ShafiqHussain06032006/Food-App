import userModel from "../models/userModel.js"; // Sequelize model
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
     const { email, password } = req.body;
     try{
        const user = await userModel.findOne({ where: { email } });

        if(!user){
            return res.json({success: false , message: "User doesn't exist" });
        }

        // matching password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success: false , message: "Invalid password" });
        }

        const token = createToken(user.id);
          res.json({success:true,token})
     }
     catch(error){
        console.log(error);
         res.json({success:false, message : "Error occurred" });

    
     }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

// register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // checking if user already exists - Sequelize syntax
        const exists = await userModel.findOne({ where: { email } });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }

        // password length check
        if (password.length < 8) {
            return res.json({ 
                success: false, 
                message: "Password must be at least 8 characters long" 
            });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating user with Sequelize
        const user = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword
        });

        const token = createToken(user.id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to create user" });
    }
}

export { loginUser, registerUser };