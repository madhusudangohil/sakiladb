let expect = require('chai').expect;
let repo = require('../repository/actorRepository');
describe('actorRepository', function(){
    describe('find by exact first name', function(){
        it('should return three records for name NICK', function(){
         return repo.findByName('NICK').then(f=>{
             expect(f).to.have.lengthOf(3);             
         }
         );       
    })

    it('should return an empty array for name SDFGD', function(){
         return repo.findByName('SDFGD').then(f=>{
             expect(f).to.be.an('array').that.is.empty;             
         }
         );       
    })
    })
});