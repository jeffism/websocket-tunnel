FROM node:latest

RUN apt update && apt install -y openssh-client sshpass

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ssh_tunnel.sh /ssh_tunnel.sh
RUN chmod +x /ssh_tunnel.sh

COPY start.sh /start.sh
RUN chmod +x /start.sh


CMD ["./start.sh"]
