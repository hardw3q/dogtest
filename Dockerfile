# Шаг 1: Сборка приложения
FROM node:24.2-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci
RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:24.2-alpine

WORKDIR /app


COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/generated ./generated

EXPOSE 3000

CMD ["npm", "run", "start:prod"]


