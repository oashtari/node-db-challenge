
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, project_id: 1, task_description: 'remove broken shelf', notes: 'walls are fragile, be careful', completed: false },
        { id: 2, project_id: 1, task_description: '', notes: 'dump old shelf', completed: false },
        { id: 3, project_id: 1, task_description: 'install new shelf', notes: 'get better materials so it does not break as easily', completed: false },
        { id: 4, project_id: 2, task_description: 'remove nails', notes: 'walk around whole house, remove all unused nails', completed: false },
        { id: 5, project_id: 2, task_description: '', notes: 'keep good nails, dump other nails in recycling', completed: false },
        { id: 6, project_id: 2, task_description: 'use putty', notes: 'make sure after you fill hole, putty is smooth so we can paint wall', completed: false },
        { id: 7, project_id: 3, task_description: 'gain hunger', notes: 'do something active you bum', completed: false },
        { id: 8, project_id: 3, task_description: 'make yummy bread food thing', notes: 'use onions, tomatoes, ham, salami, cheese and more cheese', completed: false },
        { id: 9, project_id: 3, task_description: 'put it in your belly', notes: 'do not forget to chew', completed: false }
      ]);
    });
};