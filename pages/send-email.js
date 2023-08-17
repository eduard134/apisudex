const nodemailer = require('nodemailer');

const sendEmail = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'kindergarden494@gmail.com', // Your Gmail email
                pass: 'loghindan494@gmail', // Your Gmail password or an app-specific password
            },
        });

        const mailOptions = {
            from: data.email,
            to: 'loghindan494@gmail.com', // Receiver's email address
            subject: `New Contact from ${data.name}`,
            text: data.message,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
