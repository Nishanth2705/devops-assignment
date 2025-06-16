# ---- Stage 1: Build the app ----
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code and build
COPY . .
RUN npm run build

# ---- Stage 2: Run the app using a lightweight image ----
FROM node:18-alpine

WORKDIR /app

# Install only 'serve' for production use
RUN npm install -g serve

# Copy built app from previous stage
COPY --from=builder /app/out ./out

# Expose port 3000 and start server
EXPOSE 3000
CMD ["serve", "-s", "out"]
