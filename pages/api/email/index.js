const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

export default async (req, res) => {
  const oauth2Client = new OAuth2(
    process.env.NODEMAILER_CLIENTID,
    process.env.NODEMAILER_CLIENTSECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.NODEMAILER_REFRESHTOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      type: process.env.NODEMAILER_TYPE,
      user: process.env.NODEMAILER_USER,
      clientId: process.env.NODEMAILER_CLIENTID,
      clientSecret: process.env.NODEMAILER_CLIENTSECRET,
      refreshToken: process.env.NODEMAILER_REFRESHTOKEN,
      accessToken,
    },
    tls: { rejectUnauthorized: false }
  });

  const { method } = req;
  const { email, name, msg } = req.body;

  switch (method) {
    case 'POST':
      try {
        const from = name && email ? `${name} <${email}>` : `${name || email}`;

        const message = {
          from,
          to: process.env.NODEMAILER_USER,
          subject: `New message from ${from}`,
          text: msg,
          replyTo: from,
        };
      
        transporter.sendMail(message, function (error, response) {
          if (error) {
            res.status(400).json({ success: false });
          } else {
            res.status(200).json({ success: true });
          }
          transporter.close();
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
