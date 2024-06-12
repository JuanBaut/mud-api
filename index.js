/* eslint-disable no-console */
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { connect } from 'mongoose';
import router from './src/routes/router.js';
import getWelcomeMessage from './welcome.js';

const app = express();
const { json } = bodyParser;
const PORT = 3000;

connect(process.env.MONGOSE_URI)
  .then(() => console.log('Database is connected.'))
  .catch((error) =>
    console.error('Database is not working as expected.', error),
  );

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(json());
app.use('/api', router);
app.get('/', (req, res) => {
  const welcomeText = getWelcomeMessage(req, res);
  res.send(welcomeText);
});

app.use((err, _req, res) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () =>
  console.log(`\n · Server is running on port ${PORT} · \n`),
);
