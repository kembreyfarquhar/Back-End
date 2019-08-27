exports.up = function(knex) {
  return knex.schema.createTable("trips", trips => {
    trips.increments();

    trips.string("title").notNullable();

    trips.string("description");

    trips.string("location");

    trips.integer("start_date");

    trips.integer("end_date");

    trips
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");

    trips.boolean("complete").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
