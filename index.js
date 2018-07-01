const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Validation for checking email inputs
const validateEmailInput = require('./validation/EmailValidation');

app.post('/', (req, res) => {
  const { errors, isValid } = validateEmailInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'iamxanofficial@gmail.com',
        pass: 'showme7255'
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: 'iamxanofficial@gmail.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.render('Error');
      } else {
        res.render('Success');
      }
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
