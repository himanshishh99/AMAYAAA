
const events = [
  {
    medicine: 'Metformin',
    slot: 1,
    status: 'taken'
  },
  {
    medicine: 'Vitamin D3',
    slot: 3,
    status: 'missed'
  }
];

events.forEach(event => {
  console.log('[SIMULATED EVENT]', event);
});
