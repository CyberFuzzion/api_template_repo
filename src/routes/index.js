import { Router } from 'express';
import authRoutes from './api/auth';
import transactionsRoutes from './api/transactions';

const router = new Router();
router.use('/auth', authRoutes);
router.use('/transactions', transactionsRoutes);

export default router;