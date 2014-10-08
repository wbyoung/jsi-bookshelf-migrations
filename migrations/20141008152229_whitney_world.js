'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('austin_trafficante', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('austin_trafficante');
};
