import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/products/products.routes';
import { orderRoutes } from './app/orders/orders.routes';
const app: Application = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/health', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('E-commerce server is running');
  } catch (error) {
    next(error);
  }
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `No route matched like that: ${req.url}`,
  });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
});

export default app;
