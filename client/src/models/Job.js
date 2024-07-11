import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
    title: { type: String },
  department: { type: String },
  employmentType: { type: String },
  classification: { type: String },
  skills: [{ type: String }],
  location: { type: String },

  includeSalary: { type: String },
  salaryDetails: {
    currency: { type: String },
    paidEvery: { type: String },
    minSalary: { type: String },
    maxSalary: { type: String },
  }
}, { timestamps: true,collection: "jobs" });

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;
