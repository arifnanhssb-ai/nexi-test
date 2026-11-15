import { Router } from 'express';

export const apiRouter = Router();

apiRouter.get('/health', (_req, res) => {
  res.json({ ok: true, workspace: 'session_1794728695147', uptime: Math.round(process.uptime()) });
});
