let repo = require('./repository/film');
let actorRepo = require('./repository/actor');
let storeRepo = require('./repository/store');

/*
actorRepo.insert('Dre', 'Parker').then(a=>{
    console.log(a);
})
*/

actorRepo.name.findByFirstName('Dre').then(a=>{
    a[0].update({
        last_name: 'Paarker'
    }).then(u=>{
        console.log(u);
    })
});

actorRepo.name.findByFullName('Dre', 'Paarker').then(a=>{
    a.update({
        last_name: 'Parker'
    }).then(u=>{
        console.log(u);
    })
});



repo.findByTitle('NECKLACE').then(f=>{
             console.log(f[0].title);
         });
/*
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
});


storeRepo.findByTitleInInventory('ACADEMY DINOSAUR').then(f=> {
    console.log(f.films[0].title);
});

*/


actorRepo.findByFilmId(1).then(f=>{
    console.log(f.length);
});
