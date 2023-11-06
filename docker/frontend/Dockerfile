FROM node:alpine

WORKDIR /apps 

COPY ./public ./public
COPY ./src ./src
COPY ./.eslintrc.json ./.eslintrc.json
COPY ./next-env.d.ts ./next-env.d.ts
COPY ./next.config.js ./next.config.js
COPY ./package.json ./package.json
COPY ./postcss.config.js ./postcss.config.js
COPY ./tailwind.config.ts ./tailwind.config.ts
COPY ./tsconfig.json ./tsconfig.json

RUN npm i && \
    npm run build

CMD ["npm", "run", "production"]