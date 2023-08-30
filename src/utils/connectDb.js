import mongoose from "mongoose";

const connect = async () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        // .then(() => console.log('⚡Bolt touched the server⚡'))
        // .catch((error) => console.log(error))
}

export default connect;