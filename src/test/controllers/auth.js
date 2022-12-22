import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import server from '../../app';
import models from '../../models';
import { AuthController } from '../../controllers';
import {
  status, messages, Jwt, bcrypt,
} from '../../utils';

import fakerSpec from '../crossVariables'

chai.use(sinonChai);
chai.use(chaiHttp);
chai.should();
const { expect } = chai;
const { signInUser } = AuthController;

const signInRoute = '/api/v1/auth/sign_in';

const dummyUser = {
    first_name: 'Alex',
    last_name: 'Doe',
    login_ID: 6,
    branch: 'branch1',
    password: 'xxxxxxx',
};

afterEach(() => sinon.restore());

// User Registration Validation test

describe('User Auth', () => {
    it('Should return error for missing parameters', (done) => {
      const user = {
      };
      chai.request(server).post(signInRoute).send(user).end((error, response) => {
        if (error) throw Error(`Error making test request ${signInRoute}`);
        response.should.have.status(status.unprocessable);
        response.body.should.have.property('errors');
        done();
      });
    });
  
    it('fakes a successful User sign in', function(done){
      this.timeout(50000);
      chai.request(server).post(signInRoute).send(dummyUser).end((error, response) => {
        response.should.have.status(status.success);
        fakerSpec.token = response.body.token;
        done();
      })
    });
  });
  
// Learner Sign In Validation test
