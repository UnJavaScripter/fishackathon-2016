'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var plantaCtrlStub = {
  index: 'plantaCtrl.index',
  show: 'plantaCtrl.show',
  create: 'plantaCtrl.create',
  update: 'plantaCtrl.update',
  destroy: 'plantaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var plantaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './planta.controller': plantaCtrlStub
});

describe('Planta API Router:', function() {

  it('should return an express router instance', function() {
    plantaIndex.should.equal(routerStub);
  });

  describe('GET /api/plantas', function() {

    it('should route to planta.controller.index', function() {
      routerStub.get
        .withArgs('/', 'plantaCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/plantas/:id', function() {

    it('should route to planta.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'plantaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/plantas', function() {

    it('should route to planta.controller.create', function() {
      routerStub.post
        .withArgs('/', 'plantaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/plantas/:id', function() {

    it('should route to planta.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'plantaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/plantas/:id', function() {

    it('should route to planta.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'plantaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/plantas/:id', function() {

    it('should route to planta.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'plantaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
