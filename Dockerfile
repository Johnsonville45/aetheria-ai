FROM node:22-alpine AS build
WORKDIR /usr/src/app

# Install build deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --production

# Copy source
COPY . .

# Build TypeScript
RUN npm run build

# Runtime image
FROM node:22-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/dist ./dist

# Install production deps
RUN npm ci --omit=dev || npm install --production

ENV NODE_ENV=production
CMD ["npm", "start"]
