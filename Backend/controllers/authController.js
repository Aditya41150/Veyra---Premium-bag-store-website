const User = require('../model/User')
const bcrypt = require('bcrypt')

//Create / register USER
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ email, password: hashedPassword })
        res.status(201).json({
            message: 'User created successfully, Please Login now',
            user: {
                id: newUser._id,
                email: newUser.email
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Could not create user.' })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required.'
            })
        }

        const user = await User.findOne({ email }); // fetched user from DB against his email
        if (!user) {
            return res.status(401).json({
                message: "User not found."
            })
        }
        //agar email hai to check password and let the user login
        const isMatch = await bcrypt.compare(
            password, // plain pass from request
            user.password // hashed pass from DB
        );
        if (!isMatch) {
            return res.status(401).json({
                message: "Email or password is incorrect."
            })
        }
        //if password was a match send ok response.
        return res.status(200).json({
            message: "Welcome !"
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Login failed.'
        })
    }

}

module.exports = {
    registerUser,
    loginUser
}