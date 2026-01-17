FROM node:22.13.1-slim

WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy only lockfiles first for caching
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Copy rest of app
COPY . .

# Build
RUN pnpm run build

# Expose Railway port
EXPOSE 8080

ENV NODE_ENV=production

CMD ["pnpm", "run", "start"]
