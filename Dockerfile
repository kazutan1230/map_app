FROM node:lts-slim AS base

# 作業ディレクトリを設定
WORKDIR /app

FROM base AS deps
EXPOSE 3000
COPY ./ /app/
RUN npm -v && \
    apt-get update -y && \
    apt-get install -y git-all && \
    apt-get install -y openssl && \
    npm install -g npm@latest && \
    npm install

# ビルド
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY ./ ./
RUN npm run build

# 本番環境
FROM base AS runner
# install lambda Web Adapter
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]