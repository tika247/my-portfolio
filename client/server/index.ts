import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const docsPath = path.resolve(__dirname, '../../docs');

app.use(express.static(docsPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(docsPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
