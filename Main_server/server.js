// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const JobRoutes = require('./routes/JobRoutes');
const OrganizationRoutes = require("./routes/OrganizationRoutes")

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/organization',OrganizationRoutes);
app.use('/api/jobs',JobRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(port, () => {
    console.log(`Connected to DB & listning on port: ${port}`);
  });
})
.catch((error) => {
  console.log(error);
})
