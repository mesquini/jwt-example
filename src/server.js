import app from './app';

const port = process.env.PORT ? process.env.PORT : 3333;

app.listen(port, () => console.log(`Listen port ${port}`));
