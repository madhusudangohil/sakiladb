let db = require('../../models');

module.exports = function findFilmByTitleInInventory(title){
    return db.store.findOne({
        include: [{model: db.film, through: db.inventory, where: {
            title: title
        } }]
    })
}