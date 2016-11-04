'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kinvey = require('./kinvey');

var _kinvey2 = _interopRequireDefault(_kinvey);

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line import/no-unresolved

var KinveyProvider = function () {
  function KinveyProvider() {
    _classCallCheck(this, KinveyProvider);
  }

  _createClass(KinveyProvider, [{
    key: 'init',
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _kinvey2.default.init(options);
    }
  }, {
    key: '$get',
    value: function $get() {
      return _kinvey2.default;
    }
  }]);

  return KinveyProvider;
}();

// Create the kinvey angular module


var ngKinvey = _angular2.default.module('kinvey', []);
ngKinvey.provider('$kinvey', KinveyProvider);
exports.default = ngKinvey;