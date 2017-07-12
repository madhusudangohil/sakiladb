let expect = require('chai').expect;
let repo = require('../repository/storeRepository');

describe('storeRepository', function () {
    describe('findStoreByPostalCode', function () {
        it('should return empty object for postal code without a store', function () {
            return repo.findStoreByPostalCode('13232213').then(function (f) {
                expect(f).to.be.a('null');
            })
        });

        it('should return a valid store object for postal code with a store', function () {
            return repo.findStoreByPostalCode('1').then(function (f) {
                expect(f).to.be.an('object');
                expect(f.store_id).to.equal(1);
            })
        });

        it('should return a valid address object for postal code with a store', function () {
            return repo.findStoreByPostalCode('1').then(function (f) {
                f.getAddress().then(function (add) {
                    expect(add).to.be.an('object');
                })
            })
        });
    });

    describe('findStoreByCity', function () {
        it('should return null object for city without a store', function () {
            return repo.findStoreByCity('alfa').then(function (f) {
                expect(f).to.be.a('null');
            })
        });

        it('should return a valid store object for city with a store', function () {
            return repo.findStoreByCity('Lethbridge').then(function (f) {
                expect(f).to.be.an('object');
                expect(f.store_id).to.equal(1);
            })
        });

        it('should return a valid address object for city with a store', function () {
            return repo.findStoreByCity('Lethbridge').then(function (f) {
                f.getAddress().then(function (add) {
                    expect(add).to.be.an('object');
                })
            })
        });

        it('should return a valid city object for city with a store', function () {
            return repo.findStoreByCity('Lethbridge').then(function (f) {
                f.getAddress().then(function (add) {
                    add.getCity().then(function (c) {
                        expect(c).to.be.an('object');
                        expect(c.city).to.be.equal('Lethbridge');
                    });
                })
            })
        });
    });

    describe('findStoreByCountry', function () {
        it('should return null object for country without a store', function () {
            return repo.findStoreByCountry('norway').then(function (f) {
                expect(f).to.be.a('null');
            })
        });

        it('should return a valid store object for country with a store', function () {
            return repo.findStoreByCountry('Canada').then(function (f) {
                expect(f).to.be.an('object');
                expect(f.store_id).to.equal(1);
            })
        });

        it('should return a valid address object for country with a store', function () {
            return repo.findStoreByCountry('Canada').then(function (f) {
                return f.getAddress().then(function (add) {
                    expect(add).to.be.an('object');
                })
            })
        });

        it('should return a valid country object for country with a store', function () {
            return repo.findStoreByCountry('Canada').then(function (f) {
                expect(f.address.city.country.country).to.equal('Canada');                
            })
        });
    });

})