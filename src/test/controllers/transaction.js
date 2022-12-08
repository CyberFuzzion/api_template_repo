import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import server from '../../app';
import models from '../../models';
import { AuthControllers } from '../../controllers';
import {
  status, messages, Jwt, bcrypt,
} from '../../utils';

import fakerSpec from '../crossVariables'

chai.use(sinonChai);
chai.use(chaiHttp);
chai.should();
const { expect } = chai;

const fetchTransactionsRoute = '/api/v1/transactions/fetch';

afterEach(() => sinon.restore());

describe("Transactions", () => {
  it('Fetch Transactions Succesfully', function(done){
     this.timeout(50000);
    chai.request(server).get(fetchTransactionsRoute)
    .set('authorization', `Bearer ${fakerSpec.token}`)
    .set('Accept', 'application.json')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((error, response) => {
        response.body.should.be.a('object');
        response.body.statusCode.should.eql(200);
        response.body.should.have.property('status');
        response.body.should.have.property('message');
        response.body.data.should.be.a('array');
        response.body.data[0].should.be.a('object');
        response.body.data[0].should.have.property('user_id');
        response.body.data[0].should.have.property('transaction_type');
        response.body.data[0].should.have.property('amount');
      done();
    })
  });
});


