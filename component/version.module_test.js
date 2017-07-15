'use strict';

describe('ngKeyValueInput.1.0.0 module', function () {
  beforeEach(module('ngKeyValueInput.version'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      expect(version).toEqual('1.0.0');
    }));
  });
});
