import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
})

export default mongoose.models.Post || mongoose.model("Post", postSchema);