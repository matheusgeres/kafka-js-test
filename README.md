# Kafka JS Test

Exemplo simples de como utilizar a biblioteca `kafkajs` em NodeJS.

Utilize o compose `full-stack.yml` disponível em [kafka-stack-docker-compose](https://github.com/conduktor/kafka-stack-docker-compose?tab=readme-ov-file#full-stack) para consumir e produzir mensagem.

Instale a depedência com npm.
```bash
$ npm i
```

Se preferir utilizar yarn, execute.
```bash
$ yarn install
```

Para consumir consumir o tópico, execute.
```bash
$ node consumer.js
```

Para produzir consumir no tópico, execute.
```bash
$ node producer.js
```

Parabéns! Você acaba de realizar alguns dos comandos básicos para utilizar o Kafka com NodeJS. 😁🚀🌟