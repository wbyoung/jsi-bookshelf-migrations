'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('Steve', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Steve');
};
