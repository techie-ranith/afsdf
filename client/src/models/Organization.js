const mongoose = require('mongoose');
const { Schema } = mongoose;

const organizationSchema = new Schema({
    orgName: { type: String, default: '' },
    
    orgType: { type: String, default: '' },
    industry: { type: String, default: '' },
    address: {
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        postalCode: { type: String, default: '' },
        country: { type: String, default: '' },
    },
    contactEmail: { type: String, default: '' },
    contactPhone: { type: String, default: '' },
    jobref: { type: Schema.Types.ObjectId, ref: 'Job' }
}, { timestamps: true});

const Organization = mongoose.models.Organization || mongoose.model("Organization", organizationSchema);

module.exports = Organization;
