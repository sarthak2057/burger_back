import mongoose from 'mongoose';

export const connectDB = async () => {
  //   const { connection } = mongoose.connect(process.env.MONGO_URI);
  mongoose.connect(process.env.MONGO_URI);
  console.log(`Database is connected`);
};
