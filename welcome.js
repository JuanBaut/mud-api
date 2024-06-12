export default function getWelcomeMessag() {
  const appName = 'ExpressTrack API';
  const version = '1.0.0';

  const welcomeText = `
      ¡Bienvenido a "${appName}" API v${version}!
    `;

  const documentationText = `
      Este es un punto de entrada para acceder a las funcionalidades de la API.
  
      **Documentación:**
  
      * [Enlace a la documentación en GitHub](https://github.com/RiosDeboraS/ExpressTrack-API)
    `;

  const responseText = `${welcomeText}
  
    ${documentationText}`;

  return responseText;
}
