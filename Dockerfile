FROM node:26-alpine AS base
RUN apk --no-cache upgrade

FROM base AS toolchain
RUN npm install -g yarn@1.22.22

FROM toolchain AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install --frozen-lockfile

FROM toolchain AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG API_URL
ENV API_URL=$API_URL

RUN yarn build

FROM base AS runner
WORKDIR /app

RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


USER nextjs

EXPOSE 3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
