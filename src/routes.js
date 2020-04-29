import { Router } from 'express';

import authMiddlewares from './app/middlewares/auth';
import SessionCotroller from './app/controllers/SessionController';
import UserCotroller from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Node.js com JWT e Hash na senha' });
});

routes.post('/session', SessionCotroller.session);

routes.post('/users', UserCotroller.store);

routes.use(authMiddlewares);

routes.get('/users', UserCotroller.index);

export default routes;
