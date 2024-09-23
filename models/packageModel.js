import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    about: { type: String, required: true },
    fees: { type: Number, required: true },
    available: { type: Boolean, default: true },
    slots_booked: { type: Object, default: {} },
    date: { type: Number, required: true },
}, { minimize: false })

const packageModel = mongoose.models.package || mongoose.model("package", packageSchema);
export default packageModel;