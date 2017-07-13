let expect = require('chai').expect;
let repo = require('../repository/customerRepository');

describe('customerRepository', function(){
    describe('findRentalHistoryByCustomerId', function(){
        it('should return list of rentals', function(){
            return repo.findRentalHistoryByCustomerId(130).then(r=>{
                expect(r.rentals).length.to.be.above(23);
            });
        });

    });

});