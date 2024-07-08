import exp from "constants";
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
    verificationCode: {
      type: String,
      required: false,
      expires: 30,
    },
    
    token_id:{
      type: String,
      required: false,
    },


    

  },

  { timestamps: true, collection: "user" }
);

export default mongoose.models.User || mongoose.model("User", userSchema);


