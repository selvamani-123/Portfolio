import express from 'express';
import cors from 'cors';
import routesRouter from './routes/routes.js';
import workerRouter from './routes/worker.js';
import enterpriseRouter from './routes/enterprise.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/route', routesRouter);
app.use('/api/worker', workerRouter);
app.use('/api/enterprise', enterpriseRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'SAFETRACK Engine Running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 SAFETRACK Backend API Server running at http://localhost:${PORT}`);
});
