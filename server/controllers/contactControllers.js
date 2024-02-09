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
        

        const transporter = nodemailer.createTransport({
            // host: "Gmail",
            // port: 465,
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            // secure: true,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: "lccodingprojects@gmail.com",
              pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                ciphers: 'SSLv3'
            }
            });
              
            const contact = {
            from: '"The Ripple Gym" <admin-donotreply@ripple.com>', // sender address
            to: "lccodingprojects@gmail.com",
            subject: "Interested Applicant", // Subject line
            text: "Interested applicant!", // plain text body
            html: 
            `<b> Name : ${name} </b>
            <b> Email : ${email} </b>
            <b> Number : ${number} </b>`, // html body
          };


            transporter.sendMail(contact, function(error, contact){
            // if(error) { 
            //     console.log(error)
            //      return res.status(500).json({ error: 'Internal server error' });
            // } else { 
            //     // contact.save()
            //     return res.status(200).json({ status: 'Success' });
            // }
            

            if (error) { 
                console.log(error);
                return res.status(500).json({ error: 'Internal server error' });
            } else { 
                // The email was sent successfully
                console.log('Email sent:', info.response);
                // Optionally, you can save the contact details to the database here if needed
    
                return res.status(200).json({ status: 'Success' });
            }
        
        })

    } catch (error) {
        return res.status(400).json({error: error.message})
    }


    // When success is not caught inside the sendMail
    return res.status(200).json({ status: 'Success' });
}


module.exports = {
    sendContactUs
}

