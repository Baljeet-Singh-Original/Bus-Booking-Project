const express = require('express');
const request = require('request')
const config = require('config')
const router = express.Router();
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Profile = require('../../models/profile')
const User = require('../../models/User');
const Post = require('../../models/Post');

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await (await Profile.findOne({ user: req.user.id }))

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' })

        }

        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

});




router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.find({ user: req.params.user_id }).populate('user', ['name', 'avatar'])
        if (!profile) { return res.status(400).json({ msg: 'There is no profile for this user.' }) }
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'There is no profile for this user.' })

        }
        res.status(500).send('Server Error')
    }
})

router.delete('/', auth, async (req, res) => {
    try {
        await Post.deleteMany({ user: req.user.id })
        await Profile.findOneAndRemove({ user: req.user.id })
        await User.findOneAndRemove({ _id: req.user.id })
        res.json({ msg: 'User deleted.' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router;