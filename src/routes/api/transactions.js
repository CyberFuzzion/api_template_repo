import express from 'express';
import { TransactionsController } from '../../controllers';
import middleware from '../../middlewares';

const { Authenticate, validate } = middleware;

const {
  fetchTransactions
} = TransactionsController;

const router = express.Router();

router.get('/fetch', Authenticate.verifyToken, fetchTransactions);

export default router;