import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../configs/auth';

module.exports = {
  async session(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!(await user.checkPassword(password)))
      return res
        .status(401)
        .json({ success: false, message: 'Usuário ou senha incorreto(s)!' });

    const { id } = user;

    return res.json({
      success: true,
      message: 'Token criado!!!',
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expires,
      }),
    });
  },
};
