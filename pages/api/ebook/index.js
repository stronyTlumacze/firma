import dbConnect from '../../../utils/dbConnection';
import Email from '../../../models/emailModel';
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const path = require('path');

const filePath = path.resolve('./public/ebook.pdf');
// https://github.com/rivera1294/next-mongodb
dbConnect();

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
  const { email } = req.body;

  switch (method) {
    case 'POST':
      try {
        console.log("NODEMAILER_SERVICE: ", process.env.NODEMAILER_SERVICE)
        let newEmail = await new Email({
          email: email,
        });
        newEmail.save();

        const message = {
          from: process.env.NODEMAILER_USER,
          to: email,
          subject: `Content Marketing i Social Media - Twój darmowy E-book`,
          html: `
          <p>Dziękujemy za zaufanie.</p>
          <p>W załączniku przebywa przyszykowany dla Państwa E-book.</p>
          <p>E-book jest zbiorem najlepszych zasad dotyczących tworzenia contentu marketingowego, social media i sposobów na zdobycie większej ilości klientów.</p>
          `,
          replyTo: process.env.NODEMAILER_USER,
          attachments: [
            {
              filename: 'Content Marketing i Social Media.pdf',
              path: filePath
            }
          ]
        };

        transporter.sendMail(message, function (error, response) {
          console.log("WESZŁO DO SENDMAIL");
          if (error) {
            console.log(error);
            res.status(400).json({ success: false });
          } else {
            console.log("UDAŁO SIĘ");
            transporter.close();
            res.status(200).json({ success: true });
          }
        });

        // res.status(200).json({ success: true });
      } catch (error) {
        console.log("CATCH:", error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      console.log("DEFAULT FALSE");
      res.status(400).json({ success: false });
      break;
  }
};
