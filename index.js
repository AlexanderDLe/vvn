const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const key = require('./config/key');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Validation for checking email inputs
const validateEmailInput = require('./validation/EmailValidation');

app.post('/contact', (req, res) => {
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
      host: 'smtp.office365.com',
      port: 587,
      secure: true,
      auth: {
        user: 'contact@vvnzquan.com',
        pass: key.pw
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: 'contact@vvnzquan.com',
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.render('Error');
      } else {
        res.json({ success: 'Your message has been sent!' });
      }
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
