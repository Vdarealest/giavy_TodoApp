import mongoose, { connect } from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
        console.log("connect CSDL thành công");
    } catch (error) {
        console.log("Lỗi khi kết nối CSDL: ", error);
        process.exit(1);// exit with error
    }
};