import express from 'express';

const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('server working');
});

app.listen(PORT, 'localhost', () => {
  console.log(`server running on http://localhost:${PORT}`);
});
