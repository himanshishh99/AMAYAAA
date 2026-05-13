
const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.emqx.io');

client.on('connect', () => {
  console.log('[MQTT] CONNECTED');

  client.subscribe('amaya/pillbox/events');
});

client.on('message', (topic, payload) => {
  console.log(topic, payload.toString());
});

module.exports = client;
