import 'dotenv/config';

const email = process.env.USER_EMAIL;

export default async function signupEmail(to, id) {
  return {
    from: email,
    to,
    subject: 'Registro',
    // falta redireccionar al front
    // ESTA PARTE DE CAMBIA CON EL FRONT
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
        <h2 style="color: #333;">¡Gracias por registrarte!</h2>
        <p style="font-size: 16px;">Bienvenido a nuestra plataforma.</p>
        <p style="font-size: 16px;">Para activar tu cuenta, haz clic en el siguiente enlace:</p>
        <a href="http://localhost:3000/users/status/${id}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Activar cuenta</a>
        <br><br>
        <img src="https://static.vecteezy.com/system/resources/previews/002/191/988/non_2x/delivery-truck-icon-fast-shipping-delivery-concept-vector.jpg" alt="Imagen de activación" style="max-width: 100%; height: auto;">
      </div>
    `,
  };
}
