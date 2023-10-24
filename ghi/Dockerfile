# Use an official Node runtime as the base image
FROM node:18.17.0

# Set the working directory in the container
WORKDIR /app

COPY package.json package-lock.json ./

# Install npm and dependencies
RUN npm install -g npm@10.2.0
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
