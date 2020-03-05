const User = require('../models/users');

module.exports = {
    addUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(200).json({ success: true, user: user })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find({}).lean();
            res.status(200).json({ success: true, users: users })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    updateUser: async (req, res) => {
        try {
            await User.findByIdAndUpdate({ _id: req.body._id }, {
                $set: {
                    'name': req.body.name,
                    'email': req.body.email,
                    'contact': req.body.contact,
                    'role': req.body.role
                }
            });
            res.status(200).json({ success: true })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove({ _id: req.params.id });
            res.status(200).json({ success: true })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    }

}