const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

//GET RESOURCES
router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});


//GET TASKS
router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

//GET PROJECTS
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

// ADD RESOURCE

router.post('/resources', (req, res) => {
    const resourceInfo = req.body;

    Projects.addResource(resourceInfo)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

// ADD TASK
router.post('/tasks', (req, res) => {
    const taskInfo = req.body;

    Projects.addTask(taskInfo)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

// ADD PROJECT
router.post('/', (req, res) => {
    const projectInfo = req.body;

    Projects.addProject(projectInfo)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});




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