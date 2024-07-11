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
  job: { type: Schema.Types.ObjectId, ref: 'jobs' },
  company: { type: Schema.Types.ObjectId, ref: 'organizations' }
}, { timestamps: true, collection: "user" });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
