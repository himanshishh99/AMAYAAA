
const router = require('express').Router();

router.get('/status', (_, res) => {
  res.json({
    connected: true,
    battery: 87,
    firmware: 'v2.3.1'
  });
});

router.post('/event', (req, res) => {
  console.log('[MQTT EVENT]', req.body);

  res.status(201).json({
    accepted: true
  });
});

module.exports = router;
