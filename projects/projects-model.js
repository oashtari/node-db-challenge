const db = require('../data/db-config');

// module.exports = {
//     getRecipes,
//     getShoppingList,
//     getInstructions
// }

// function getRecipes() {
//     return db('recipes');
// };

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
