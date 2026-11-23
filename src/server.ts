import express from 'express';
import routes from './routes';

const app = express();

app.use('/api', routes);

app.get('/', (_req: express.Request, res: express.Response): void => {
  res.send('Image Processing API is running');
});

export default app;
