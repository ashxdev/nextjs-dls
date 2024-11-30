FROM node:23.3.0 AS base
WORKDIR /app
# Install pnpm globally
RUN npm i -g pnpm

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build


# Use Alpine for the release stage
FROM node:23.3.0-alpine3.19 AS release
WORKDIR /app

# Install system dependencies for Sharp
RUN apk add --no-cache \
  python3 \
  make \
  g++ \
  vips-dev

# Install pnpm globally
RUN npm i -g pnpm

# Copy dependencies and built files from the base stage
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
