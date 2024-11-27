import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.listen(port, () => {
  console.log(`App on port ${port}`);
});
