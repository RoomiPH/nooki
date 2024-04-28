# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /app

# Set environment to development to ensure devDependencies are installed
ENV NODE_ENV development

# Copy package files for both client and server and install dependencies
COPY ./packages/client/package*.json ./client/
COPY ./packages/server/package*.json ./server/
RUN cd client && npm install
RUN cd server && npm install

# Copy the client and server directories
COPY ./packages/client ./client
COPY ./packages/server ./server

# Build both client and server
RUN cd client && npx tsc && npx vite build
RUN cd server && npm run build

# Expose the port server is running on
EXPOSE 3000

# Set environment to production for running the app
ENV NODE_ENV production

# Run the server
CMD ["node", "./server/dist/app.js"]
