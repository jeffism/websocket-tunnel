FROM node:latest

RUN apt-get update && apt-get install -y openssh-server

RUN mkdir /var/run/sshd && echo 'root:dev' | chpasswd && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config && \
    echo "AllowUsers root" >> /etc/ssh/sshd_config && \
    echo "Port 2222" >> /etc/ssh/sshd_config

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["./start.sh"]

