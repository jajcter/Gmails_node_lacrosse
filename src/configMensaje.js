const nodemailer = require('nodemailer');

module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    auth: {
      user: 'pruebaspersonaldenniss@gmail.com', // Cambialo por tu email
      pass: 'osgcbitafmlomihg' // Cambialo por tu password
    }
  });

  const mailOptions = {
    from: `"${formulario.nombre} 👻" <${formulario.email}>`,
    to: 'pruebaspersonaldenniss@gmail.com', // Cambia esta parte por el destinatario
    subject: formulario.asunto,
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      {console.log("Operación correcta");
      //console.log(info);
    }
  });
}
