# Step 1: Use official Node.js image for building the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the React app files
COPY . ./

# Build the React app for production
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build files from the previous build step
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (the default port for Nginx)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
