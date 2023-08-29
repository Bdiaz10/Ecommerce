# Ecommerce
Robust and scalable e-commerce backend built with TypeScript, Node.js, Express, and MongoDB to power the online shopping experience. The backend is developed as a REST API, utilizing HTTP status codes for effective communication. User authentication is implemented using JSON Web Tokens (JWT) to ensure secure access to the platform.

# The goal of the project was to explore
-  Building a REST API
-  HTTP Status Codes
-  User Authentication (JWT)
-  Node.js & Express
-  TypeScript
-  MongoDB
-  Docker

# Install & Run
0. Prerequisites
   - Download and install docker: https://docs.docker.com/engine/install/
   - Clone this repo to your local machine
     > git clone https://github.com/Bdiaz10/Ecommerce.git
   - Create .env file with your MongoDB URI
     
1. Navigate to file that containes docker file
   > cd server

2. Build docker
   > docker build -t <app_name> .

3. Run docker
   > docker run -p 3001:3001 <app_name>

Application will now be available on port 3001

