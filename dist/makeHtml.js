"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(name, classA, attr, body) {
  var html = document.createElement(name);
  classA.forEach(function (el) {
    html.classList.add(el);
  });
  var attribute = Object.entries(attr);
  attribute.forEach(function (el) {
    html.setAttribute(el[0], el[1]);
  });
  var text = document.createTextNode(body);
  html.append(text);
  return html;
};

exports["default"] = _default;