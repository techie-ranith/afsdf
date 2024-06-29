import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    verificationCodeExpires: { type: Date, expires: 0, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
