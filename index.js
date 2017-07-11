let repo = require('./repository/filmRepository');

/*repo.findByTitle('NECKLACE').then(f=>{
             console.log(f.title);
         });
*/
repo.findFilmsByActor('NICK', 'WAHLBERG').then( f => {
    console.log(f.length);
})