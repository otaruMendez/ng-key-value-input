'use strict';

describe('ngKeyValueInput.1.0.0 module', function () {

  describe('ng-key-value-input directive', function () {
    it('should print current version', function () {
      module(function ($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function ($compile, $rootScope) {
        var element = $compile('<span data-app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
