
const cron = require('node-cron');

function init() {
  cron.schedule('0 21 * * *', () => {
    console.log('Generating adherence summaries');
  });
}

module.exports = { init };
