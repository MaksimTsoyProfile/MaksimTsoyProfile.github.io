"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeHtml = _interopRequireDefault(require("./makeHtml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(dataPost, dataUser) {
  var title = (0, _makeHtml["default"])('button', ['btn', 'btn-primary', 'list-group-item', 'list-group-item-action'], {
    'data-toggle': 'modal',
    'data-target': "#userTitle".concat(dataPost.id)
  }, "Title: \"".concat(dataPost.title, "\" "));
  var userName = (0, _makeHtml["default"])('span', ['btn', 'btn-outline-primary'], {
    type: 'button',
    'data-target': "#userName".concat(dataPost.id)
  }, "".concat(dataUser[dataPost.userId - 1].name));
  title.append(userName);
};

exports["default"] = _default;