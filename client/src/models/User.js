import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  secondemail: { type: String, required: false },
  bio: { type: String, required: false },
  role: { type: String, required: false },
  password: { type: String, required: false },
  verificationCode: { type: String, required: false, expires: 30 },
  fileupload: { type: String, required: false },
  organizationref: { type: Schema.Types.ObjectId, ref: 'Organization' }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
