# Use the official Node.js image from the Docker Hub
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (or whatever port your application uses)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
