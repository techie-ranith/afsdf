
const mongoose = require('mongoose');
const { Schema } = mongoose;

const organizationSchema = new Schema({
    orgName: {
        type: String,
        
    },
    job: { type: Schema.Types.ObjectId, ref: 'jobs' },
    
    orgType: {
        type: String,
       
    },
    industry: String,
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    contactEmail: {
        type: String,
     
    },
    contactPhone: {
        type: String,
       
    },
   

  
},{ timestamps: true,collection: "organizations" });

const  Organization = mongoose.models.User || mongoose.model(" Organization", organizationSchema);

export default  Organization;
