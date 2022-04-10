const Users = require('../schema/users');

const getUsersList = async (req, res) => {
    try {
        const usersList = await Users.find({ _id: { $ne: req.user._id } }).select("-password")
        return res.status(200).json({
            status: 200,
            data: usersList
        })

    } catch (error) {
        return res.json({ message: error.message })
    }
}

module.exports = { getUsersList }