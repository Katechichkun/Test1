'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('API Endpoint Test', () => {
    describe('GET requrest on /', () => {
        it('should return hello world', (done) => {
            chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('POST request on /user with data', () => {
        it('should return 201', (done) => {
            let params = {
                userId: '123'
            };

            chai.request(server)
            .post('/user')
            .send(params)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.status.should.equal('success');
                res.body.userId.should.equal(params.userId);
                done();
            });
        });
    });

    describe('PUT request on /user with data', () => {
        it('should return update data', (done) => {
            let params = {
                data: 'abc'
            };

            chai.request(server)
            .put('/user/123')
            .send(params)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.equal('updated');
                res.body.data.should.equal('abc');
                done();
            });
        });
    });

    describe('DELETE request on/user', () => {
        it('should return deleted userId', (done) => {
            chai.request(server)
            .delete('/user/123')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.equal('deleted');
                res.body.userId.should.equal('123');
                done();
            });
        });
    });

    describe('request on unknown url', () => {
        it('should return 404', (done) => {
            chai.request(server)
            .get('/nowhere')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
        });
    });
});