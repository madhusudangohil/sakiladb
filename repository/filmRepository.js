let db = require('../models');

function findByTitle(title) {    
    return db.film.findAll({
            where: {
              title: {
                  $like: '%'+ title},              
            }
        });
} 

function findFilmsByActor(firstName, lastName) {    
    return db.actor.findAll({
             where: {
                first_name: firstName,   
                last_name: lastName          
            },
            include: [               
                { model: db.film, as:'fa', through:'film_actor'}                            
            ]
        });
} 

module.exports = {
    findByTitle: findByTitle,
    findFilmsByActor: findFilmsByActor,
}