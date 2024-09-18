const User = require("../model/Userschema")
const bcrypt = require("bcrypt")
exports.create = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        if (!fname || !lname || !email || !password) {
            res.status(400).json({
                success: false,
                message: "all fields are required"
            })
        }
        const existinguser = await User.findOne({ email })
        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: "user allready exsist"
            })
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const userdata = await User.create({ fname, lname, email, password: hashpassword })
        if (!userdata) {
            res.status(400).json({
                success: false,
                message: "User not found"
            })

        }

        res.send(userdata).status(200).json({
            success: true,
            message: "user create successfully",
            userdata
        })

    } catch (error) {
        console.log("intrenal error", error);

    }
}
exports.Getalldata = async (req, res) => {
    try {
        const getdata = await User.find()
        if (!getdata) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }
        res.send(getdata).status(200).json({
            success: true,
            getdata
        })
    } catch (error) {
        console.log("internal error ", error);

    }
}
exports.getone = async (req, res) => {
    try {
        const id = req.params.id
        const userexist = await User.findById(id)
        if (!userexist) {
            return res.status(400).json({
                success: false,
                message: "user not found",
                userexist

            })
        }
        res.status(200).json(userexist)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "internal error"
        })
    }
}
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const exsistuser = await User.findById(id)
        if (!exsistuser) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            })
        }
        const updateddata = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateddata)
    } catch (error) {

        res.status(400).json({
            success: false,
            message: "internal error"
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const exsist = await User.findById(id)
        if (!exsist) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        await User.findByIdAndDelete(id, req.body, { new: true })
        res.status(200).json({
            success: true,
            message: "userdeleted",

        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "internal error"
        })
    }
}