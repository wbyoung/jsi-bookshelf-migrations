'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('whitney', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('whitney');
};
