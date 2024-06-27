const kafka = require('./kafka');
const producer = kafka.producer()

async function sendMessage(producer, message){
  return producer.send({
    topic: 'test-topic',
    messages: [
      { value: message },
    ],
  })
}

const run = async () => {
  // Producing
  await producer.connect()
  await sendMessage(producer, 'Tive')
  await sendMessage(producer, 'uma')
  await sendMessage(producer, 'ideia!!')
}

run().catch(console.error)