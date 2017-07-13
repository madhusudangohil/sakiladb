let repo = require('./repository/filmRepository');
let actorRepo = require('./repository/actorRepository');
let storeRepo = require('./repository/storeRepository');

/*repo.findByTitle('NECKLACE').then(f=>{
             console.log(f.title);
         });

repo.findFilmsByActor('NICK', 'WAHLBERG').then( f => {
   f.getFa().then(function(film){
            film.forEach(function(e,i){
                //console.log(e.title);
        });
})});


storeRepo.findStoreByPostalCode(1).then(f=>{
    console.log(f);
    f.getAddress().then(function(add){
        //console.log(add.district);
    });
});

storeRepo.findStoreByCity('Lethbridge').then(f=>{
    console.log(f.store_id);
    console.log(f.getAddress().then(function(add){
        console.log(add.address);
    }));
});

storeRepo.findStoreByCountry('Canada').then(f=>{
    console.log(f.store_id);
    console.log(f.getAddress().then(function(add){
        console.log(add.address);
    }));
});

storeRepo.findStoreByCity('alfa').then(f=>{
    console.log(f.store_id);
    console.log(f.getAddress().then(function(add){
        console.log(add.address);
    }));
});

storeRepo.findStoreByCountry('Canada').then(f=>{
    console.log(f.store_id);
    f.getAddress().then(function(add){
        add.getCity().then(function(ct){
            ct.getCountry().then(function(c){
               console.log(c.country);
            })
        })
    });
});

storeRepo.getAllStaffMemberForAStoreByCity('Lethbridge').then(f=>{
    f.forEach(function(e,i){
        console.log(e.first_name);
    })
    
});

storeRepo.findStaffByStoreId(1).then(f=>{
    console.log(f.staffs.length);
});*/

actorRepo.findActorsByFilmId(1).then(f=>{
    console.log(f.length);
});