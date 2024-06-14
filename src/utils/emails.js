/* eslint-disable no-console */

import { createTransport } from 'nodemailer';
import signupEmail from './signupEmail.js';
import 'dotenv/config';


const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});

const sendEmail = async (to, id) => {
  try {
    const info = await transporter.sendMail(await signupEmail(to, id));
    console.log('Correo enviado correctamente.', info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

export default sendEmail;
