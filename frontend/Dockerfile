# Stage 1: Build
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
