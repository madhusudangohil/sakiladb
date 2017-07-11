let actor = require('../models').actor;

function findByName(name) {    
    return actor.findAll({
            where: {
                first_name: name,              
            }
        });
} 

module.exports = {
    findByName: findByName,
}