import express from 'express';
import { AuthController } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate, validate } = middleware;

const {
  signInUser
} = AuthController;

const router = express.Router();

// router.post('/sign_up', validate('signUp'), signUpUser);
router.post('/sign_in', validate('signIn'), signInUser);

export default router;