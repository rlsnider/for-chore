import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import { Connection } from 'mongoose';


const connectDB = async (): Promise<void> => {
    try {
        const conn: Connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.blue);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
