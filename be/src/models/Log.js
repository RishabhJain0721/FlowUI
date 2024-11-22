import mongoose, { Schema } from "mongoose";

const logSchema = new mongoose.Schema({
  description: {
    type: {},
    required: true,
  },
});
const Log = mongoose.model("Log", logSchema);

export default Log;
