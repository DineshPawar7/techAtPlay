import express from 'express';
import { applyMiddleware } from './middleware/index.js';
import jsonRoutes from './routes/jsonRoutes.js';
import base64Routes from './routes/base64Routes.js';
import historyRoutes from './routes/historyRoutes.js';

const app = express();

applyMiddleware(app);

app.use('/api', jsonRoutes);
app.use('/api', base64Routes);
app.use('/api', historyRoutes);

export default app;
