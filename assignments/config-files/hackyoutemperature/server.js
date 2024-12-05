import express from 'express';
import cors from 'cors';
import router from './app.js';
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use('/' , router)


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`The server is running now on http://localhost:${PORT}`);
  });
}
export default app;