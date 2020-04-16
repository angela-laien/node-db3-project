const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    // addStep,
    update,
    remove
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(id) {
    // select * from Schemes joins steps on schemes.id = steps.scheme_id;
    return db.select('*').from('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .where('schemes.id', id)
}

function add(scheme) {
    return db('schemes').insert(scheme);
}

function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where({ id });
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
}