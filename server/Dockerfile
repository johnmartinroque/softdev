# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy server files
COPY . .

# Expose port 5000
EXPOSE 5000

# Run server
CMD ["node", "server.js"]
