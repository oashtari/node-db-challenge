const db = require('../data/db-config');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks //retrieving a list of tasks. ** The list of tasks should include the project name and project description **.GET
}


// function add(scheme) {
//     return db('schemes')
//         .insert(scheme, 'id')
//         .then(id => {
//             return findById(id[0])
//         })
// }
function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
}

function getResources() {
    return db('resources');
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}

function getProjects() {
    return db('projects');

}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
}

function getTasks() {
    return db('tasks');

}


// function getShoppingList(id) {
//     return db('recipes as r')
//         .join('recipe_ingredients_instructions as rgi', 'r.id', '=', 'rgi.recipe_id')
//         .join('ingredients as i', 'i.id', '=', 'rgi.ingredient_id')
//         .select('r.recipe_name', 'i.ingredient_name', 'rgi.quantity')
//         .where({ 'r.id': id })
// };

// function getInstructions(id) {
//     return db('recipes as r')
//         .join('recipe_ingredients_instructions as rgi', 'r.id', '=', 'rgi.recipe_id')
//         .select('r.recipe_name', 'rgi.description', 'rgi.recipe_steps')
//         .where({ 'r.id': id })
// };
