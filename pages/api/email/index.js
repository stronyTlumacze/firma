const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     type: 'OAuth2',
//     user: 'strony.dla.tlumaczy@gmail.com',
//     pass: 'tlumacze10',
//     refreshToken:
//       '1//0f2EeHOx2zyPyCgYIARAAGA8SNwF-L9IrezEsWNJM4uhAyBtq-oZGTl8yLETg6X5tSpSHiSYMrMnV2-m4f1x0QJvYrucd6Eqm9xc',
//     accessToken:
//       'ya29.A0AfH6SMAdz1bP5Y1FxvRGhN_WHUfNcjuTj4-wg4jdlAGYkroziXE_HWS2dWyePz-WD-j1bliABdPrjfN-N_ONQi-k1paxdJXgt5r1coaJPzJUAC91N5C_wSPs1Y5gu6b3LV8JwZrvAmeSATKOf5SAulnzjpPd3h_xqoQ4S2iMP_Q',
//     clientId:
//       '865506280459-dhbug7l21rasn0f0eolg3sbgh3q6khvc.apps.googleusercontent.com',
//     clientSecret: 'gp6SrUxR3fIHH0Riunyok-Q_',
//   },
// });

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const oauth2Client = new OAuth2(
  '865506280459-n13ecdfcb4685rgq9pgv3sgm7cadvec2.apps.googleusercontent.com',
  'xm56cdJ7HlRCXXjjf1ZKzqkY',
  OAUTH_PLAYGROUND
);

oauth2Client.setCredentials({
  refresh_token: '1//047G7h3UaL7U4CgYIARAAGAQSNwF-L9IrAyvsIFDOuWZy4X6C0O08sMef-TW08Ox7tLC-Y4eB8C_9DRQ2pInJtvLofQEMUXak9cs',
});

const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'strony.dla.tlumaczy@gmail.com',
    clientId: '865506280459-n13ecdfcb4685rgq9pgv3sgm7cadvec2.apps.googleusercontent.com',
    clientSecret: 'xm56cdJ7HlRCXXjjf1ZKzqkY',
    refreshToken: '1//047G7h3UaL7U4CgYIARAAGAQSNwF-L9IrAyvsIFDOuWZy4X6C0O08sMef-TW08Ox7tLC-Y4eB8C_9DRQ2pInJtvLofQEMUXak9cs',
    accessToken,
  },
});


// export const transporter = nodemailer.createTransport(smtpTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: false,
//   service: 'Gmail',
//   auth: { user: 'strony.dla.tlumaczy@gmail.com', pass: 'tlumacze10' },
//   tls: { rejectUnauthorized: false }
// }));

export default async (req, res) => {
  const { method } = req;
  const { email, name, msg } = req.body;
  console.log('1')
  switch (method) {
    case 'POST':
      try {
        const from = name && email ? `${name} <${email}>` : `${name || email}`;

        const message = {
          from,
          to: 'strony.dla.tlumaczy@gmail.com',
          subject: `New message from ${from}`,
          text: msg,
          replyTo: from,
        };
        console.log('2')
        transporter.sendMail(message, function (error, response) {
          if (error) {
            console.log('ERROR sendMail', error);
          } else {
            console.log(' email sent successfully');
            res.status(201).json({ success: true });
          }
          transporter.close();
        });
        console.log('3')
        res.status(201).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
