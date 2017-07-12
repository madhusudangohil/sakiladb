let repo = require('./repository/filmRepository');

let storeRepo = require('./repository/storeRepository');

/*repo.findByTitle('NECKLACE').then(f=>{
             console.log(f.title);
         });
*/
repo.findFilmsByActor('NICK', 'WAHLBERG').then( f => {
   f.getFa().then(function(film){
            film.forEach(function(e,i){
                //console.log(e.title);
        });
})});


storeRepo.findStoreByPostalCode(1).then(f=>{
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
