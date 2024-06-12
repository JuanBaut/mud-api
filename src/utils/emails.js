/* eslint-disable no-console */
import { createTransport } from 'nodemailer';
import signupEmail from './signupEmail.js';

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});

const sendEmail = (to, id) => {
  transporter.sendMail(signupEmail(to, id), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('email sent.');
    }
  });
};

export default sendEmail;
