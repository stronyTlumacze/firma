import dbConnect from '../../../utils/dbConnection';
import Email from '../../../models/emailModel';
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// https://github.com/rivera1294/next-mongodb
dbConnect();

export default async (req, res) => {
  const oauth2Client = new OAuth2(
    '865506280459-n13ecdfcb4685rgq9pgv3sgm7cadvec2.apps.googleusercontent.com',
    'xm56cdJ7HlRCXXjjf1ZKzqkY',
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: '1//0f2QVhILC_bKxCgYIARAAGA8SNwF-L9Ir1qAJFcypbsFo6256cjmldegr_4n1fWmFs52uXPqrUhrp1dsBFw0wHC_qx3gkgTxIg44',
  });

  const accessToken = oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'strony.dla.tlumaczy@gmail.com',
      clientId: '865506280459-n13ecdfcb4685rgq9pgv3sgm7cadvec2.apps.googleusercontent.com',
      clientSecret: 'xm56cdJ7HlRCXXjjf1ZKzqkY',
      refreshToken: '1//0f2QVhILC_bKxCgYIARAAGA8SNwF-L9Ir1qAJFcypbsFo6256cjmldegr_4n1fWmFs52uXPqrUhrp1dsBFw0wHC_qx3gkgTxIg44',
      accessToken,
    },
    tls: { rejectUnauthorized: false }
  });

  const { method } = req;
  const { email } = req.body;

  switch (method) {
    case 'POST':
      try {

        let newEmail = await new Email({
          email: email,
        });
        newEmail.save();

        const message = {
          from: 'strony.dla.tlumaczy@gmail.com',
          to: email,
          subject: `Content Marketing i Social Media - Twój darmowy Ebook`,
          text: 'Zbiór najlepszych zasad dotyczących tworzenia contentu marketingowego, social media i sposobów na zdobycie większej ilości klientów.',
          replyTo: 'strony.dla.tlumaczy@gmail.com',
          attachments: [
            {
              path: './public/E-book Content Marketing i Social Media.pdf'
            }
          ]
        };

        transporter.sendMail(message, function (error, response) {
          if (error) {
            console.log('ERROR Ebook sendMail', error);
          } else {
            console.log('Ebook wysłany!');
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
