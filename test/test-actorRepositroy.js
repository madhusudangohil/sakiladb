let expect = require('chai').expect;
let repo = require('../repository/actorRepository');

describe('actorRepository', function () {
    describe('findByName', function () {
        it('should return three records for name NICK', function () {
            return repo.findByName('NICK').then(f => {
                expect(f).to.have.lengthOf(3);
            });
        });

        it('should return an empty array for name SDFGD', function () {
            return repo.findByName('SDFGD').then(f => {
                expect(f).to.be.an('array').that.is.empty;
            });
        });
    });

    describe('findActorsByFilmId', function(){
        it('should return list of actors for a film', function(){
            return repo.findActorsByFilmId(1).then(a=> {
                expect(a).to.have.length.above(1);
            })
        });
    });
});