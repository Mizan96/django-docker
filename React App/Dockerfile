FROM node:22-alpine3.19
WORKDIR /frontend
ENV PATH ="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]