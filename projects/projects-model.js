const db = require('../data/db-config');

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks,
    updateProject,
    deleteProject,
    updateTask,
    deleteTask,
    findById,
    findTaskById
}

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
    return db('tasks as t')
        .join('projects as p', 'p.id', '=', 't.project_id')
        .select('t.id', 't.task_description', 'p.project_name', 'p.project_description');
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
}

function findTaskById(id) {
    return db('tasks')
        .where({ id })
        .first()
}

function updateProject(changes, id) {
    return db('projects')
        .where({ id })
        .update(changes, 'id')
        .then(() => {
            return findById(id)
        })
}


function deleteProject(id) {
    return db('projects')
        .where({ id })
        .del()

}

function updateTask(changes, id) {
    return db('tasks')
        .where({ id })
        .update(changes, 'id')
        .then(() => {
            return findById(id)
        })
}

function deleteTask(id) {
    return db('tasks')
        .where({ id })
        .del()

}

