'use strict';

var app = require('../..');
import request from 'supertest';

var newPlanta;

describe('Planta API:', function() {

  describe('GET /api/plantas', function() {
    var plantas;

    beforeEach(function(done) {
      request(app)
        .get('/api/plantas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          plantas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      plantas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/plantas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/plantas')
        .send({
          name: 'New Planta',
          info: 'This is the brand new planta!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPlanta = res.body;
          done();
        });
    });

    it('should respond with the newly created planta', function() {
      newPlanta.name.should.equal('New Planta');
      newPlanta.info.should.equal('This is the brand new planta!!!');
    });

  });

  describe('GET /api/plantas/:id', function() {
    var planta;

    beforeEach(function(done) {
      request(app)
        .get('/api/plantas/' + newPlanta._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          planta = res.body;
          done();
        });
    });

    afterEach(function() {
      planta = {};
    });

    it('should respond with the requested planta', function() {
      planta.name.should.equal('New Planta');
      planta.info.should.equal('This is the brand new planta!!!');
    });

  });

  describe('PUT /api/plantas/:id', function() {
    var updatedPlanta;

    beforeEach(function(done) {
      request(app)
        .put('/api/plantas/' + newPlanta._id)
        .send({
          name: 'Updated Planta',
          info: 'This is the updated planta!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPlanta = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPlanta = {};
    });

    it('should respond with the updated planta', function() {
      updatedPlanta.name.should.equal('Updated Planta');
      updatedPlanta.info.should.equal('This is the updated planta!!!');
    });

  });

  describe('DELETE /api/plantas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/plantas/' + newPlanta._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when planta does not exist', function(done) {
      request(app)
        .delete('/api/plantas/' + newPlanta._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
