import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGO_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  });

  connection.isConnected = db.connections[0].readyState;

  //   const connection = mongoose.connection;
  // connection.once('open', () => {
  //   console.log('MongoDB database connection established successfully');
  // });
}

export default dbConnect;
