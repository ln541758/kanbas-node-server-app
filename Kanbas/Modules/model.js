import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("model", schema);
export default model;