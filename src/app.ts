/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { skillRoutes } from './app/modules/skills/skills.route';
import { projectRoutes } from './app/modules/projects/projects.route';
import { blogRoutes } from './app/modules/blogs/blogs.route';
const app: Application = express();
app.use(cors());
app.use(express.json());

app.use('/api/skills', skillRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);

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

app.use((error:any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
});

export default app;
