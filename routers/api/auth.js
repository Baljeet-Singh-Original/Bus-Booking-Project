const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const auth = require('../../middleware/auth')
const User = require('../../models/Users');
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator');


// router.get('/', auth, (req, res) => res.send('Auth Route'));






router.get('/', auth, async (req, res) => {
    try {
        const user = await (await User.findById(req.user.id))
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

});


router.post('/', [
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'please enter a password').exists()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {

            let user = await User.findOne({ email });

            if (!user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'invalid data' }] });
            }


            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'invalid data' }] });
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'), { expiresIn: 9999999 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                });


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });

module.exports = router;