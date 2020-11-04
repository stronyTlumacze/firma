import dbConnect from '../../../utils/dbConnection';
import Email from '../../../models/emailModel';
// https://github.com/rivera1294/next-mongodb
dbConnect();

export default async (req, res) => {
  const { method } = req;
  const { email } = req.body;

  switch (method) {
    case 'POST':
      try {

        let newEmail = await new Email({
          email: email,
        });
        newEmail.save();

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
