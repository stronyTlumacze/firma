const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'strony.dla.tlumaczy@gmail.com',
    pass: 'tlumacze10',
    refreshToken:
      '1//0f2EeHOx2zyPyCgYIARAAGA8SNwF-L9IrezEsWNJM4uhAyBtq-oZGTl8yLETg6X5tSpSHiSYMrMnV2-m4f1x0QJvYrucd6Eqm9xc',
    accessToken:
      'ya29.A0AfH6SMAdz1bP5Y1FxvRGhN_WHUfNcjuTj4-wg4jdlAGYkroziXE_HWS2dWyePz-WD-j1bliABdPrjfN-N_ONQi-k1paxdJXgt5r1coaJPzJUAC91N5C_wSPs1Y5gu6b3LV8JwZrvAmeSATKOf5SAulnzjpPd3h_xqoQ4S2iMP_Q',
    clientId:
      '865506280459-dhbug7l21rasn0f0eolg3sbgh3q6khvc.apps.googleusercontent.com',
    clientSecret: 'gp6SrUxR3fIHH0Riunyok-Q_',
  },
});

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
