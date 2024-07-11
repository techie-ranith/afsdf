import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
  title: { type: String, default: '' },
  department: { type: String, default: '' },
  employmentType: { type: String, default: '' },
  classification: { type: String, default: '' },
  skills: [{ type: String, default: '' }],
  location: { type: String, default: '' },
  includeSalary: { type: String, default: '' },
  salaryDetails: {
    currency: { type: String, default: '' },
    paidEvery: { type: String, default: '' },
    minSalary: { type: String, default: '' },
    maxSalary: { type: String, default: '' },
  },
 
}, { timestamps: true });

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;
