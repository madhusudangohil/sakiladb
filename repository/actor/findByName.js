let db = require('../../models');

module.exports = function (name) {
    return db.actor.findAll({
        where: {
            first_name: name,
        }
    });
}