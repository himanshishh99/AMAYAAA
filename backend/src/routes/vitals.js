
const router = require('express').Router();

router.get('/summary', (_, res) => {
  res.json({
    bp: '122/78',
    glucose: 104,
    spo2: 98,
    hr: 74
  });
});

module.exports = router;
