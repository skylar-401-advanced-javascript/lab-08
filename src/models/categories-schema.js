'use strict';

const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: false },
  display_name: { type: String, required: false },
  description: { type: String, required: false },
});

const Categories = mongoose.models.categories || mongoose.model('categories', categoriesSchema);

module.exports = Categories;