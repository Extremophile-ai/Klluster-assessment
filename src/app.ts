import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './config/database';
import routes from './routes/routes';

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
connection();

app.use('/app', routes);

app.get('/', (req, res) => {
  res.send('Welcome to the new and very Improved stack overflow Issue I (version V)');
});

app.listen(port, () => {
  console.log(`⚡️[server]: server is listening on port: ${port}`);
});

export default app;
