'use strict';

const Products = require('./products-schema');

const uuid = require('uuid/v4');

const schema = {
};

class ProductsRepository {

  constructor() {
    this.database = [];
  }

  get(id) {
  }
  
  post(entry) {
  }

  put(id, entry) {
  }

  delete(id) {
  }

  sanitize(entry) {
  }

}

module.exports = ProductsRepository;
