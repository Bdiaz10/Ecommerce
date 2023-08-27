# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app/server/src/

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build
# Expose a port that the app will listen on
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "run", "prod"]
