import express from 'express';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, '../../dist');
app.use(express.static(distPath));
app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
