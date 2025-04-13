import nodemailer from 'nodemailer';

function sendMail(email, password) {
    console.log(email);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'panwarjayesh2003@gmail.com',
      pass: 'xaip zitn zljf xhun'
    }
  });

  var mailOptions = {
    from: 'panwarjayesh2003@gmail.com',
    to: email, // Send to dynamic user
    subject: 'Welcome! Verify Your Email',
    html: `
      <h1>Welcome to the system</h1>
      <p>Your email is <strong>${email}</strong></p>
      <p>Your password is <strong>${password}</strong></p>
      <h2>Thank you for registering</h2>
      <p>Click the link below to verify your email:</p>
      <a href="http://localhost:3000/verify/${email}">Verify Email</a>
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

export default sendMail;
