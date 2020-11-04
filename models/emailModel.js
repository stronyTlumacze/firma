const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailSchema = new Schema(
  {
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.models.email || mongoose.model('email', emailSchema);
module.exports = Email;
