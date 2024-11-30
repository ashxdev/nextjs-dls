FROM node:23.3.0-slim as base

# Install pnpm globally in the base stage
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM base as builder

WORKDIR /home/node/app
COPY package*.json pnpm-lock.yaml ./

# Install dependencies and build the project
RUN pnpm install
COPY . .
RUN pnpm run build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node/app
COPY package*.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --prod

COPY --from=builder /home/node/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
