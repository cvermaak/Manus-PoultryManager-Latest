FROM node:22.13.1-slim

# Disable corepack (THIS FIXES YOUR ERROR)
ENV COREPACK_ENABLE_STRICT=0
RUN corepack disable

WORKDIR /app

# Copy only lock + package first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install pnpm directly (no corepack)
RUN npm install -g pnpm@10.4.1

# Install deps
RUN pnpm install --frozen-lockfile

# Copy rest of project
COPY . .

# Build
RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "start"]
