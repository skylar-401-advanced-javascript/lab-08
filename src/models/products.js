'use strict';

const Products = require('./products-schema');

class ProductsRepository {
  getAll() {
    return Products.find();
  }

  get(_id) {
    if (!/^[0-9a-z]{24}$/i.test(_id)) {
      return Products.resolve(null);
    } else {
      return Products.findOne({
        _id: _id,
      });
    }
  }
  
  post(record) {
    let mongoCategory = new Products (record);
    return mongoCategory.save();
  }

  put(_id, record) {
    Products.findByIdAndUpdate(_id, record, (err, category) => {
      return category;
    });
  }
  
  async delete(_id) {
    Products.findByIdAndDelete(_id, (err, category) => {
      return category;
    });
  }
}

module.exports = ProductsRepository;
