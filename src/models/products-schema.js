'use strict';

const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  category: {type: String, required: false },
  name: { type: String, required: true },
  display_name: { type: String, required: false },
  description: { type: String, required: false },
});

const Products = mongoose.models.products || mongoose.model('products', productsSchema);

module.exports = Products;