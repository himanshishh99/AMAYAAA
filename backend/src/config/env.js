
module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'amaya-secret',
  MQTT_BROKER: process.env.MQTT_BROKER || 'broker.emqx.io'
};
