'use strict';

const Categories = require('./categories-schema');

class CategoriesRepository {
  getAll() {
    return Categories.find();
  }

  get(_id) {
    if (!/^[0-9a-z]{24}$/i.test(_id)) {
      return Promise.resolve(null);
    } else {
      return Categories.findOne({
        _id: _id,
      });
    }
  }
  
  async post(record) {
    let mongoCategory = new Categories (record);
    let result = await mongoCategory.save();
    console.log(result);
    return result;
  }

  put(_id, record) {
    Categories.findByIdAndUpdate(_id, record, (err, category) => {
      return category;
    });
  }
  
  async delete(_id) {
    Categories.findByIdAndDelete(_id, (err, category) => {
      return category;
    });
  }
}

module.exports = CategoriesRepository;
