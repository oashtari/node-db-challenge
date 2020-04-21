
exports.up = function (knex) {

    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('project_name', 255)
                .unique()
                .notNullable()
            tbl.text('project_description', 255)
            tbl.boolean('completed').defaultTo(false)
        })

        .createTable('tasks', tbl => {
            tbl.increments()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.text('task_description', 255)
                .unique()
                .notNullable()
            tbl.text('notes', 255)
                .unique()
            tbl.boolean('completed').defaultTo(false)
        })

        .createTable('resources', tbl => {
            tbl.increments()
            tbl.text('resource_name', 255)
                .unique()
                .notNullable()
            tbl.text('description', 255)
        })

        .createTable('projects_resources_map', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
        .dropTableIfExists('projects_resources_map')

};