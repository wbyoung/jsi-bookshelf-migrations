'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('leslie', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leslie');
};
