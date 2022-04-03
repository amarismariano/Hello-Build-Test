import nodemailer from "nodemailer";

export const emailRegister = async (data) => {
  const { email, name, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Email Information

  const info = await transport.sendMail({
    from: '"Hello Build - Repositories Searcher" <cuentas@helloBuild.com>',
    to: email,
    subject: "Hello Build - Confirm your Account",
    text: "Confirm Your Account In Hello Build",
    html: `<p>Hola: ${name} Confirm Your Account in Hello Build</p>
      <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirm/${token}"> Comprobar Cuenta </a>

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
      </p>
      
      
      `,
  });
};

export const emailForgotPassword = async (data) => {
  const { email, name, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Información del email

  const info = await transport.sendMail({
    from: '"Hello Build - Repositories Searcher" <cuentas@helloBuild.com>',
    to: email,
    subject: "HelloBuild - Reset your password",
    text: "Reset your password",
    html: `<p>Hola: ${name} has solicitado reestablecer tu contraseña</p>
      <p>Sigue el siguiente enlace para generar una nueva contraseña:
        <a href="${process.env.FRONTEND_URL}/forgot-password/${token}"> Reestablecer contraseña </a>

        <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      </p>
      
      
      `,
  });
};
