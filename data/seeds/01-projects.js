exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, project_name: 'fix shed', project_description: 'fix the shelving on the stoarge shed', completed: false },
        { id: 2, project_name: 'patch walls', project_description: '', completed: false },
        { id: 3, project_name: 'eat sandwich', project_description: 'nom nom into your tummy', completed: true }
      ]);
    });
};