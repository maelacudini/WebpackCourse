import express from 'express';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = 3000

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../dist/home.html'));
})

app.get('/article/', (req, res) => {
  res.sendFile(join(__dirname, '../dist/article.html'));
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port http://localhost:${port}/`)
})
