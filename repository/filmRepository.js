let db = require('../models');

function findByTitle(title) {
    return db.film.findAll({
        where: {
            title: {
                $like: '%' + title
            },
        }
    });
}

function findFilmsByActor(firstName, lastName) {
    return db.actor.findOne({
        where: {
            first_name: firstName,
            last_name: lastName
        },
        include: [{
            model: db.film,
            as: 'fa',
            through: 'film_actor'
        }]
    });
}

function findFilmsByLanguage(id) {
    return db.film.findAll({
        include: [{
            model: db.language,
            where: {
                language_id: id
            }
        }]
    });
}

function findFilmsByCategory(id) {
    return db.film.findAll({
        include: [{
            model: db.category,
            as: 'fcat',
            through: 'film_category',
            where: {
                category_id: id
            }
        }]
    });
}


module.exports = {
    findByTitle: findByTitle,
    findFilmsByActor: findFilmsByActor,
    findFilmsByLanguage: findFilmsByLanguage,
    findFilmsByCategory: findFilmsByCategory
}