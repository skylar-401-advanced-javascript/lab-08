'use strict';

const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

const Categories = mongoose.models.categories || mongoose.model('categories', categoriesSchema);

module.exports = Categories;