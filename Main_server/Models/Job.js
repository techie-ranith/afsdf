const { log } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    skills: {
        type: [String] // Assuming skills can be an array of strings
    },
    location: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    includeSalary: {
        type: Boolean,
        default: true // Assuming it's checked by default
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'] // Add more currencies as needed
    },
    paidEvery: {
        type: String,
        enum: ['Month', 'Week', 'Year'] // Add more options as needed
    },
    minSalary: {
        type: Number,
        required: true
    },
    maxSalary: {
        type: Number,
        required: true
    }
});

const primaryJobSearchSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    skills: {
        type: [String] // Assuming skills can be an array of strings
    },
    location: {
        type: String,
        required: true
    }

});

const secondaryJobCardSchema = new Schema({
    logo: {
        type: String,
        required: true
    },
    icon: {
        type: Boolean,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    companyname: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    location: {

    },
    tags: {
        type: [String]
    },
    date: {
        type: String,
        required: true
    }
});

const jobDescriptionSchema = new Schema({
    jobTitle:{
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    varified: {
        type: Boolean,
        required: true
    },
    favourite: {
        type: Boolean,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    datePosted: {
        type: String,
        required: true
    },
    applications: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
module.exports = primaryJobSearchSchema;
module.exports = secondaryJobCardSchema;
module.exports = jobDescriptionSchema;
