/* eslint-disable camelcase */
import models from '../models';
import {
  status, messages, hashPassword, successResponse, errorResponse, 
  conflictResponse, Jwt, bcrypt
} from '../utils/index';

const secretKey = process.env.SECRET;

/**
 * @class AuthController
 * @description Controller for User Authentication
 * @exports AuthController
 */
export default class AuthController {

  /**
   * @method signInUser
   * @description Method for learners sign in
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} response body object
   */
  static async signInUser(req, res) {
    try {
      const { branch, login_ID } = req.body;
      const user = await models.users.findOne({ where: {branch, login_ID } });
      if (!user) {
        return errorResponse(res, status.unauthorized, messages.signIn.invalid);
      }
      /*
        const isPasswordValid = await bcrypt.comparePassword(user.password, password);

        if (!isPasswordValid) {
          return errorResponse(res, status.unauthorized, messages.signIn.invalid);
        }
      */
      const {
        id, image_url, first_name, last_name
      } = user;
      const response = {
        id, branch, login_ID, image_url, first_name, last_name
      };
     
      const token = await Jwt.generateToken({ branch, login_ID, first_name }, secretKey);
      return successResponse(res, status.success, true, messages.signIn.success, response, token);
    } catch (error) {
      return errorResponse(res, status.error, false, messages.signIn.error);
    }
  }
}