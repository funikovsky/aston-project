import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/feature-flags', (req, res) => {
  res.send({ isTelegramShareEnabled: true });
});

app.listen(PORT, () => {
  console.log(`Server is starting on port: ${PORT}`);
});
