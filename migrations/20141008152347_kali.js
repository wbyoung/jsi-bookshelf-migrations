'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('kali', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kali');
};
