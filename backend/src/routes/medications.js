
const router = require('express').Router();

router.get('/', (_, res) => {
  res.json({
    medications: [
      {
        id: 'med-001',
        name: 'Metformin',
        dose: '500mg',
        adherence: 94
      }
    ]
  });
});

module.exports = router;
