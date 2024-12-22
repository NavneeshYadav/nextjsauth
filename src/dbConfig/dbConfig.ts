import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect('mongodb+srv://youtube:youtube@cluster0.0g0gn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const connection = mongoose.connection;
        connection.on('connection', () => {
            console.log("Mongodb connected successfully");

        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong");
        console.log(error);

    }
}