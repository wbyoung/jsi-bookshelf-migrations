'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('andrea', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('andrea');
};