let expect = require('chai').expect;
let repo = require('../repository/film');
describe('filmRepository', function () {
    describe('find by partial title name ', function () {
        it('should return three records for title NECKLACE', function () {
            return repo.findByTitle('NECKLACE').then(f => {
                expect(f).to.have.length(2);
            });
        })

        it('should return an empty array for title SDFGD', function () {
            return repo.findByTitle('SDFGD').then(f => {
                expect(f).to.be.an('array').that.is.empty;
            });
        })
    });

    describe('find films by actor first name', function () {
        it('should return one result for actor', function () {
            return repo.findByActor('NICK', 'WAHLBERG').then(f => {
                expect(f.first_name).to.equal('NICK');
            });
        })

        it('should return films for actor', function () {
            return repo.findByActor('NICK', 'WAHLBERG').then(f => {
                f.getFa().then(function (films) {
                    expect(films).to.have.lengthOf(25);
                })
            });
        })

    });

    describe('findFilmsLanguage', function(){
        it('should return list of films', function(){
                 return repo.findByLanguage(1).then(fl=>{
                expect(fl).to.have.length.above(1);
            })
        });
            
    });

    describe('findFilmsByCategory', function(){
        it('should return list of films for a category', function(){
                 return repo.findByCategory(6).then(fl=>{
                expect(fl).to.have.length.above(1);
            })
        });
            
    });
      
});