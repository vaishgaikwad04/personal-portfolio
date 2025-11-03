import mongoose from 'mongoose';

export const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.DB);
        console.log('connected to db');
    }catch(error){
        console.log('error connecting to db', error);
    }
}