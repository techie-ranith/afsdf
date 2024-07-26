const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const PORT = process.env.PORT || 8000;

// Configuration of the services
const api_gateway_url = 'http://localhost:8000';
const client = 'http://localhost:3000';
const Meeting_server_URL = 'http://localhost:3001';
const Main_serverURL = 'http://localhost:4000';
const candidate_suggestion_serverURL = 'http://localhost:8001';
const job_suggestion_serverURL = 'http://localhost:8002';

app.use('/api_gateway_url', createProxyMiddleware({
  target: api_gateway_url,
  changeOrigin: true,
  pathRewrite: {
    '^/client': '', 
  },
}));

// Proxy routes
app.use('/client', createProxyMiddleware({
  target: client,
  changeOrigin: true,
  pathRewrite: {
    '^/client': '', 
  },
}));

app.use('/Meeting_server', createProxyMiddleware({
  target: Meeting_server_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/candidate_suggestion_server': '', 
  },
}));

app.use('/Main_server', createProxyMiddleware({
  target: Main_serverURL,
  changeOrigin: true,
  pathRewrite: {
    '^/Main_server': '', 
  },
}));

app.use('/candidate_suggestion_server-four', createProxyMiddleware({
  target: candidate_suggestion_serverURL,
  changeOrigin: true,
  pathRewrite: {
    '^/job_suggestion_server': '', 
  },
}));


app.use('/service-four', createProxyMiddleware({
  target: job_suggestion_serverURL,
  changeOrigin: true,
  pathRewrite: {
    '^/job_suggestion_server': '', 
  },
}));

// Start the API Gateway
app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});

