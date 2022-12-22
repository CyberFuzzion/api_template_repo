/* eslint-disable camelcase */
import models from '../models';
import {
  status, messages, hashPassword, generateToken,
  successResponse, errorResponse, conflictResponse, Jwt, bcrypt, getCallbackUrls
} from '../utils/index';


/**
 * @class TransactionsController
 * @description Controllers for Transactions
 * @exports TransactionsController
 */
export default class TransactionsController {
  /**
   * @method fetchTransactions
   * @description Method for updating password
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async fetchTransactions(req, res) {
    const { id, grade } = req.user;
    try {
      // eslint-disable-next-line max-len
      const response = await models.transactions.findAll();
      if (!response) {
      } else {
        return successResponse( res, status.success, true, messages.transactions.success, response );
      }
    } catch (error) {
      errorResponse(res, 500, 'get transactions error');
    }
  }
}
