
require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const vitalsRoutes = require('./routes/vitals');
const medicationRoutes = require('./routes/medications');
const iotRoutes = require('./routes/iot');

const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get('/health', (_, res) => {
  res.json({
    status: 'healthy',
    service: 'amaya-core'
  });
});

app.use('/api/vitals', vitalsRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/iot', iotRoutes);

app.use(errorHandler);

app.listen(5000, () => {
  console.log('AMAYA BACKEND ACTIVE');
});
