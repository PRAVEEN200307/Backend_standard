import mongoose from "mongoose";

export const ConnectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://crouselearn:IwO17SFNC7tdCddC@cluster0.7ic2lyv.mongodb.net/`);
        console.log("db conntact succesfully")
    } catch (error) {
        console.log(error)
    }
}

