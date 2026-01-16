# =========================
# Railway application image
# =========================
FROM node:22.13-alpine

WORKDIR /app

# Enable pnpm
RUN npm install -g corepack \
  && corepack enable

# Install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build app
RUN pnpm run build

# Runtime
ENV NODE_ENV=production
EXPOSE 3000

CMD ["pnpm", "run", "start"]
