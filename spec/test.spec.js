'use strict';

var ImageLoader = require('../ImageLoader.js');

describe("About ImageLoader Class: ", function() {

  var loader;


  beforeEach(() => {

    function Image() {
      return {};
    }
    loader = new ImageLoader(Image);
  })

  it("load method should store the img and the handler should be called ", function(done) {
    var handler =  jasmine.createSpy('handler');
    loader.load(['1', '2', '3'], handler);
    loader.imgs.forEach((item) => {
      item.onload();
    });
    setTimeout(() => {
      expect(handler).toHaveBeenCalled();
      expect(loader.store[0]).toEqual('1');
      done();
    }, 0);
  });

  it('images should be stored', function(done) {
    loader.load(['1', '2', '3'], 'test');
    loader.imgs.forEach((item) => {
      item.onload();
    });
    setTimeout(() => {
      expect(loader.store[0]).toEqual('1');
      expect(loader.store[1]).toEqual('2');
      expect(loader.store[2]).toEqual('3');
      done();
    }, 0);
  });

});