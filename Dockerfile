FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=80
EXPOSE 8080
ENTRYPOINT ["node","index.js"]