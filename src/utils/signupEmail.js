import 'dotenv/config';

const email = process.env.USER_EMAIL;

export default async function signupEmail(to, id) {
  return {
    from: email,
    to,
    subject: 'Registro',
    text: 'gracias por registrarte',
    // falta redireccionar al front
    // ESTA PARTE DE CAMBIA CON EL FRONT
    html: `<h5>para activar tu cuenta: http://localhost:3000/user/activate/${id}</h5>`,
  };
}
