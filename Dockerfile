FROM node:21-slim

# Atualizar e instalar pacotes necessários, incluindo sudo
RUN apt update && apt install -y openssl procps sudo

# Instalar NestJS CLI globalmente
RUN npm install -g @nestjs/cli@10.3.2

# Adicionar configuração para permitir que o usuário 'node' use sudo sem senha
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Configurar o diretório de trabalho
WORKDIR /home/node/app

# Definir o usuário 'node' como o usuário padrão
USER node

# Comando padrão do contêiner
CMD tail -f /dev/null



# FROM node:21-slim

# RUN apt update && apt install -y openssl procps

# RUN npm install -g @nestjs/cli@10.3.2

# RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# WORKDIR /home/node/app

# USER node

# CMD tail -f /dev/null
