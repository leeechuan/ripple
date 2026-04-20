const nodemailer = require("nodemailer");
const validator = require('validator')


//Send Contact Us Email

const sendContactUs = async (req, res) => {
    try {
        const { name, number, email } = req.body;

        if (!name || !number || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (!validator.isEmail(email)) {
            throw Error('Email is not valid')
        }
        
        return res.status(200).json({ status: 'Success', message: 'The email feature has been disabled as the site is no longer maintained.' });

    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


module.exports = {
    sendContactUs
}

