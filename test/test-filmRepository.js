let expect = require('chai').expect;
let repo = require('../repository/filmRepository');
describe('filmRepository', function(){
    describe('find by partial title name ', function(){
        it('should return three records for title NECKLACE', function(){
         return repo.findByTitle('NECKLACE').then(f=>{
             expect(f).to.have.lengthOf(2);             
         }
         );       
    })

    it('should return an empty array for title SDFGD', function(){
         return repo.findByTitle('SDFGD').then(f=>{
             expect(f).to.be.an('array').that.is.empty;             
         }
         );       
    })
    });

    describe('find films by actor first name', function(){
         it('should return one result for actor', function(){
            return repo.findFilmsByActor('NICK','WAHLBERG').then(f=>{
            expect(f).to.have.lengthOf(1);             
         }
         );       
        })

        it('should return films for actor', function(){
            return repo.findFilmsByActor('NICK','WAHLBERG').then(f=>{
            expect(f[0].fa).to.have.lengthOf(25);             
         }
         );       
        })

    });
});