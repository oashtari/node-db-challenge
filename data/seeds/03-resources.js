


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'hammer', description: '' },
        { id: 2, resource_name: 'garbage bin', description: '' },
        { id: 3, resource_name: 'patch tool', description: '' },
        { id: 4, resource_name: 'putty', description: '' },
        { id: 5, resource_name: 'mouth', description: '' },
        { id: 6, resource_name: 'food', description: '' }
      ]);
    });
};