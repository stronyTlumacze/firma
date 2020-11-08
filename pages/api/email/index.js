// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');
// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//   '865506280459-n13ecdfcb4685rgq9pgv3sgm7cadvec2.apps.googleusercontent.com',
//   'xm56cdJ7HlRCXXjjf1ZKzqkY',
//   "https://developers.google.com/oauthplayground"
// );

// oauth2Client.setCredentials({
//   refresh_token: '1//0f2QVhILC_bKxCgYIARAAGA8SNwF-L9Ir1qAJFcypbsFo6256cjmldegr_4n1fWmFs52uXPqrUhrp1dsBFw0wHC_qx3gkgTxIg44',
// });

// const accessToken = oauth2Client.getAccessToken();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: 'strony.dla.tlumaczy@gmail.com',
//     clientId: '865506280459-n13ecdfcb4685rgq9pgv3sgm7cadvec2.apps.googleusercontent.com',
//     clientSecret: 'xm56cdJ7HlRCXXjjf1ZKzqkY',
//     refreshToken: '1//0f2QVhILC_bKxCgYIARAAGA8SNwF-L9Ir1qAJFcypbsFo6256cjmldegr_4n1fWmFs52uXPqrUhrp1dsBFw0wHC_qx3gkgTxIg44',
//     accessToken,
//   },
//   tls: { rejectUnauthorized: false }
// });

// export default async (req, res) => {
//   const { method } = req;
//   const { email, name, msg } = req.body;
//   console.log('1')
//   switch (method) {
//     case 'POST':
//       try {
//         const from = name && email ? `${name} <${email}>` : `${name || email}`;

//         const message = {
//           from,
//           to: 'strony.dla.tlumaczy@gmail.com',
//           subject: `New message from ${from}`,
//           text: msg,
//           replyTo: from,
//         };
//         console.log('2')
//         transporter.sendMail(message, function (error, response) {
//           console.log("WESZŁO DO SENDMAIL");
//           if (error) {
//             console.log('ERROR sendMail', error);
//           } else {
//             console.log(' email sent successfully');
//             res.status(201).json({ success: true });
//           }
//           transporter.close();
//         });
//         console.log('3')
//         res.status(201).json({ success: true });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// };

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey('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');

const msg = {
  to: 'strony.dla.tlumaczy@gmail.com', // Change to your recipient
  from: 'strony.dla.tlumaczy@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

const sendEmail = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: 'strony.dla.tlumaczy@gmail.com'
            }
          ],
          subject: 'Demo success :)'
        }
      ],
      from: {
        email: 'noreply@demo.com',
        name: 'Test SendGrid'
      },
      content: [
        {
          type: 'text/html',
          value: `Congratulations <b>CWELU</b>, you just sent an email with sendGrid`
        }
      ]
    })
  });
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    // await sendEmail({ name, email });
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae: "The requested endpoint was not found or doesn't support this method."
    }
  });
}
