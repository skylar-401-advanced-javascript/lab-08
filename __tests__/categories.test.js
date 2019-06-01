'use strict';
require('dotenv').config();
const Categories = require('../src/models/categories');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/401d3-lab-08';
const mongoose = require('mongoose');

const repository = new Categories();

describe('Categories Repository', () => {
  beforeAll(() => {

    const mongooseOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
    };
    mongoose.connect(MONGODB_URI, mongooseOptions);
  });

  afterAll(() => {
    mongoose.connection.db.dropDatabase();
  });

  it('should start empty', async () => {
    var result = await repository.getAll();
    expect(result).toEqual([]);
  });

  it('can create a category and then get it', async () => {
    var result = await repository.post({
      name: 'Wheels',
    });

    expect(result).toBeDefined();
    expect(result.name).toBe('Wheels');
    expect(result._id).toBeDefined();

    var fromDb = await repository.get(result._id);
    expect(fromDb).toBeDefined();
    expect(fromDb._id).toBeDefined();
    expect(fromDb._id.toString()).toBe(result._id.toString());
    expect(fromDb.name).toBe(result.name);

    var all = await repository.getAll();
    expect(all.length).toBeGreaterThan(0);
    expect(all.find(p => p._id.toString() === fromDb._id.toString())).toBeDefined();
  });

  it('can update a category', async () => {
    var result = await repository.post({
      name: 'Wheels',
    });
    await repository.put(result._id, {name: 'Changed'});

    var newResult = await repository.get(result._id);

    expect(newResult).toBeDefined();
    expect(newResult.name).toBe('Changed');
  });

  it('can delete a category', async () => {
    var result = await repository.post({
      name: 'Wheels',
    });
    await repository.delete(result._id);

    var deleteResult = await repository.get(result._id);

    expect(deleteResult).toBeNull();
  });

});