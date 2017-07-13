let db = require('../models');

function findStaffByStoreId(id) {
    return db.store.findOne({
        where:{store_id: id},
        include: [{
            model: db.staff,
            required: true           
        }]
    });
}

function findStoreByPostalCode(code) {
    return db.store.findOne({
        include: [{
            model: db.address,
            where: {
                postal_code: code
            }
        }]
    });
}

function findStoreByCity(city) {
    return db.store.findOne({
        include: [{
            model: db.address,
            required: true,
            include: [{
                model: db.city,
                where: {
                    city: city
                }
            }]
        }]
    });
}

function findStoreByCountry(country) {
    return db.store.findOne({
        include: [{
            model: db.address,
            required: true,
            include: [{
                model: db.city,
                required: true,
                include: [{
                    model: db.country,                    
                    where: {
                        country: country
                    }
                }]
            }]
        }]
    });
}

function getAllStaffMemberForAStoreByCity(city){
     return db.store.findOne({
        include: [{
            model: db.address,
            required: true,
            include: [{
                model: db.city,
                where: {
                    city: city
                }
            }]
        }]
    }).then(function(s){
        return db.staff.findAll({
            where:{
                store_id: s.store_id
            }
        })
    });
}



module.exports = {
    findStoreByPostalCode: findStoreByPostalCode,
    findStoreByCity: findStoreByCity,
    findStoreByCountry: findStoreByCountry,
    getAllStaffMemberForAStoreByCity: getAllStaffMemberForAStoreByCity,
    findStaffByStoreId: findStaffByStoreId
}