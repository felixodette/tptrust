const nodemailer = require('nodemailer');

exports.handler = async (event, context, callback) => {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
            user: 'felix.odete@gmail.com',
            pass: '0774854979',
        }
    });

    const mailOptions = {
        from: `${data.name} <${data.email}>`,
        to: 'felix.odette@gmail.com',
        subject: 'New message from TPTrust Website',
        html: `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <p>Message: ${data.message}</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        callback(null, {
            statusCode: 200,
            body: 'Message sent successfully',
        });
    } catch (error) {
        console.error(error);
        callback(error);
    }
}
