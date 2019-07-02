'use strict';

require('dotenv').config();
const {server} = require('../src/app');
const supertest = require('supertest');
const mockRequest = supertest(server);
const Categories = require('../src/models/categories');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/401d3-lab-08';
const mongoose = require('mongoose');

const repository = new Categories();

describe('Categories Routes', () => {
  beforeAll(async () => {
  
    const mongooseOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
    };
    await mongoose.connect(MONGODB_URI, mongooseOptions);

    await repository.post({name: 'test1'});
    await repository.post({name: 'test2'});
    await repository.post({name: 'test3'});
    await repository.post({name: 'test4'});
  });

  it('can get all categories', () => {
    return mockRequest
      .get('/categories')
      .expect(200)
      .expect(response => {
        expect(response.body.results).toBeInstanceOf(Array);
      });
  });
 
});