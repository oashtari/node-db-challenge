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

// GET PROJECT BY ID

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then(project => {
            if (project) {
                res.json(project);
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

// GET TASK BY ID

router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;

    Projects.findTaskById(id)
        .then(task => {
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: 'Could not find task with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

// UPDATE PROJECT

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
        .then(project => {
            if (project) {
                Projects.updateProject(changes, id)
                    .then(updatedProject => {
                        res.json(updatedProject);
                    });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update project' });
        });
});

// DELETE PROJECT

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Projects.deleteProject(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete project' });
        });
});


// UPDATE TASK

router.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findTaskById(id)
        .then(task => {
            if (task) {
                Projects.updateTask(changes, id)
                    .then(updatedTask => {
                        res.json(updatedTask);
                    });
            } else {
                res.status(404).json({ message: 'Could not find task with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update task' });
        });
});

// DELETE TASK

router.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    Projects.deleteTask(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted });
            } else {
                res.status(404).json({ message: 'Could not find project with given id' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete project' });
        });
});


module.exports = router;