FROM node:23.3.0-slim AS base

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base AS builder

WORKDIR /home/node/app
COPY package*.json pnpm-lock.yaml ./

# Install dependencies and build the project
RUN pnpm install
COPY . .
RUN pnpm run build

# Verify the build output
RUN ls -la /home/node/app

FROM base AS runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package*.json pnpm-lock.yaml ./

# Install production dependencies
RUN pnpm install --prod

# Copy the built files from the builder stage
COPY --from=builder /home/node/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
