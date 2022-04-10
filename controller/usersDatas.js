const Users = require('../schema/users');

const getUsersList = async (req, res) => {
    // console.log("req.user")
    // console.log(req.user)
    try {
        console.log("req.user._id")
        console.log(req.user._id)
        const usersList = await Users.find({ _id: { $ne: req.user._id } }).select("-password")
        console.log(usersList)
        return res.status(200).json({
            status: 200,
            data: usersList
        })

    } catch (error) {
        return res.json({ message: error.message })
    }
}

module.exports = { getUsersList }