import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { apiRouter } from './server/routes.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 4120;

app.use(express.json());
app.use('/w/session_1794728695147/api', apiRouter);
app.use('/api', apiRouter);

async function boot() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      root: __dirname,
      base: '/w/session_1794728695147/',
      server: { middlewareMode: true, allowedHosts: true, hmr: false, ws: false, watch: null },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use('/w/session_1794728695147', express.static(distDir));
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '127.0.0.1', () => {
    console.log('Fullstack modular sandbox listening on port', PORT);
  });
}

boot();
