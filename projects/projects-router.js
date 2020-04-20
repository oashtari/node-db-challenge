const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();


// router.get('/', (req, res) => {
//     Recipes.getRecipes()
//         .then(recipes => {
//             res.json(recipes);
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to get recipes' });
//         });
// });

// router.get('/:id/shoppingList', (req, res) => {

//     const { id } = req.params;

//     Recipes.getShoppingList(id)
//         .then(list => {
//             if (list) {
//                 res.status(200).json(list)
//             } else {
//                 res.status(404).json({ message: 'Could not find list for given recipe' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to get any shopping list' });
//         });
// })

// router.get('/:id/instructions', (req, res) => {
//     const { id } = req.params;

//     Recipes.getInstructions(id)
//         .then(steps => {
//             if (steps) {
//                 res.status(200).json(steps)
//             } else {
//                 res.status(404).json({ message: 'Could not find instructions for this recipe' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to get any the instructions of any sort' });
//         });
// })

// router.get('/ingredients/:id/recipes', (req, res) => {
//     const { id } = req.params;

//     Recipes.getIngredient(id)
//         .then(recipe => {
//             res.status(200).json(recipe)
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'no recipes with just one ingredient' })
//         })
// })

module.exports = router;