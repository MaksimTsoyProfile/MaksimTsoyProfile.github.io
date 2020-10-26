"use strict";

require("./css/style.css");

require("bootstrap/dist/css/bootstrap.min.css");

require("bootstrap/dist/js/bootstrap.min.js");

require("jquery/dist/jquery.min.js");

require("popper.js");

var _makeHtml = _interopRequireDefault(require("./makeHtml"));

var _makeContainer = _interopRequireDefault(require("./makeContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('page-preloader');

    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 0);
};

var getPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var responce, allPosts, responce2, users, container, body, mainContainer;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/posts');

          case 2:
            responce = _context5.sent;
            _context5.next = 5;
            return responce.json();

          case 5:
            allPosts = _context5.sent;
            _context5.next = 8;
            return fetch('https://jsonplaceholder.typicode.com/users');

          case 8:
            responce2 = _context5.sent;
            _context5.next = 11;
            return responce2.json();

          case 11:
            users = _context5.sent;
            container = document.querySelector('.list-group');
            body = document.querySelector('body');
            mainContainer = document.querySelector('.container');
            allPosts.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(el) {
                var title, userName;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        title = (0, _makeContainer["default"])(el, users);
                        userName = (0, _makeContainer["default"])(el, users);
                        container.append(title);
                        title.addEventListener('click', /*#__PURE__*/function () {
                          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                            var modalFade, modalDialog, modalContent, modalHeader, modalTitle, xButton, span, modalBody, modalBodyH, modalComentsAlert, textComentAlert, textHead, textSign, responceBd, responceBody, textBody, responceCom, responceComments;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    e.preventDefault();
                                    modalFade = document.createElement('div');
                                    modalDialog = document.createElement('div');
                                    modalContent = document.createElement('div');
                                    modalHeader = document.createElement('div');
                                    modalTitle = document.createElement('h3');
                                    xButton = document.createElement('button');
                                    span = document.createElement('span');
                                    modalBody = document.createElement('div');
                                    modalBodyH = document.createElement('h5');
                                    modalComentsAlert = document.createElement('h6');
                                    textComentAlert = document.createTextNode('Comments: ');
                                    textHead = document.createTextNode("Title: \"".concat(el.title, "\""));
                                    textSign = document.createTextNode('close');
                                    modalFade.classList.add('modal');
                                    modalFade.classList.add('fade');
                                    modalFade.setAttribute('id', "userTitle".concat(el.id));
                                    modalFade.setAttribute('tabindex', '-1');
                                    modalFade.setAttribute('role', 'dialog');
                                    modalFade.setAttribute('aria-labelledby', 'exampleModal3Label');
                                    modalFade.setAttribute('aria-hidden', 'true');
                                    modalDialog.classList.add('modal-dialog');
                                    modalDialog.setAttribute('role', 'document');
                                    modalContent.classList.add('modal-content');
                                    modalHeader.classList.add('modal-header');
                                    modalTitle.classList.add('modalTitle');
                                    modalTitle.setAttribute('id', 'exampleModal3Label');
                                    xButton.classList.add('close');
                                    xButton.setAttribute('type', 'button');
                                    xButton.setAttribute('data-dismiss', 'modal');
                                    xButton.setAttribute('aria-label', 'Close');
                                    span.setAttribute('aria-hidden', 'true');
                                    modalBody.classList.add('modal-body');
                                    modalBodyH.classList.add('body-text');
                                    body.append(modalFade);
                                    modalFade.append(modalDialog);
                                    modalDialog.append(modalContent);
                                    modalContent.append(modalHeader);
                                    modalHeader.append(modalTitle);
                                    modalHeader.append(xButton);
                                    xButton.append(span);
                                    modalContent.append(modalBody);
                                    modalBody.append(modalBodyH);
                                    modalBody.append(modalComentsAlert);
                                    modalComentsAlert.append(textComentAlert);
                                    modalTitle.append(textHead);
                                    span.append(textSign);
                                    _context.next = 49;
                                    return fetch("https://jsonplaceholder.typicode.com/posts/".concat(el.id));

                                  case 49:
                                    responceBd = _context.sent;
                                    _context.next = 52;
                                    return responceBd.json();

                                  case 52:
                                    responceBody = _context.sent;
                                    textBody = document.createTextNode("".concat(responceBody.body));
                                    modalBodyH.append(textBody);
                                    _context.next = 57;
                                    return fetch("https://jsonplaceholder.typicode.com/comments?postId=".concat(el.id));

                                  case 57:
                                    responceCom = _context.sent;
                                    _context.next = 60;
                                    return responceCom.json();

                                  case 60:
                                    responceComments = _context.sent;
                                    responceComments.forEach(function (item) {
                                      var modalCommentsHead = document.createElement('h6');
                                      var modalCommentsBody = document.createElement('p');
                                      var textCommentsHead = document.createTextNode("".concat(item.name, "(").concat(item.email, ")"));
                                      var textCommentsBody = document.createTextNode("".concat(item.body));
                                      modalBody.append(modalCommentsHead);
                                      modalBody.append(modalCommentsBody);
                                      modalCommentsHead.append(textCommentsHead);
                                      modalCommentsBody.append(textCommentsBody);
                                    });

                                  case 62:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, this);
                          }));

                          return function (_x2) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                        userName.addEventListener('click', /*#__PURE__*/function () {
                          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                            var container2, link, textLink, responceUserCom, responceUserComments;
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    container.remove();
                                    container2 = document.createElement('div');
                                    link = document.createElement('a');
                                    textLink = document.createTextNode('All Title');
                                    container2.classList.add('list-group');
                                    link.classList.add('btn');
                                    link.classList.add('btn-primary');
                                    link.setAttribute('type', 'button');
                                    mainContainer.append(container2);
                                    container2.append(link);
                                    link.append(textLink);
                                    _context3.next = 15;
                                    return fetch("https://jsonplaceholder.typicode.com/posts?userId=".concat(el.userId));

                                  case 15:
                                    responceUserCom = _context3.sent;
                                    _context3.next = 18;
                                    return responceUserCom.json();

                                  case 18:
                                    responceUserComments = _context3.sent;
                                    responceUserComments.forEach(function (elem) {
                                      var title2 = document.createElement('button');
                                      var userName2 = document.createElement('span');
                                      var textUserName2 = document.createTextNode("".concat(users[elem.userId - 1].name));
                                      var textTitle2 = document.createTextNode("Title: \"".concat(elem.title, "\" "));
                                      title2.setAttribute('type', 'button');
                                      title2.classList.add('btn');
                                      title2.classList.add('btn-primary');
                                      title2.classList.add('list-group-item');
                                      title2.classList.add('list-group-item-action');
                                      title2.setAttribute('data-toggle', 'modal');
                                      title2.setAttribute('data-target', "#userTitle".concat(elem.id));
                                      userName2.classList.add('btn');
                                      userName2.classList.add('btn-outline-primary');
                                      userName2.setAttribute('type', 'button');
                                      userName2.setAttribute('data-target', "#userName".concat(elem.id));
                                      container2.append(title2);
                                      title2.append(textTitle2);
                                      title2.append(userName2);
                                      userName2.append(textUserName2);
                                      title2.addEventListener('click', /*#__PURE__*/function () {
                                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ee) {
                                          var modalFade2, modalDialog2, modalContent2, modalHeader2, modalTitle2, xButton2, span2, modalBody2, modalBodyH2, modalComentsAlert2, textComentAlert2, textBody2, textHead2, textSign2, responceCom2, responceComments2;
                                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                            while (1) {
                                              switch (_context2.prev = _context2.next) {
                                                case 0:
                                                  ee.preventDefault();
                                                  modalFade2 = document.createElement('div');
                                                  modalDialog2 = document.createElement('div');
                                                  modalContent2 = document.createElement('div');
                                                  modalHeader2 = document.createElement('div');
                                                  modalTitle2 = document.createElement('h3');
                                                  xButton2 = document.createElement('button');
                                                  span2 = document.createElement('span');
                                                  modalBody2 = document.createElement('div');
                                                  modalBodyH2 = document.createElement('h5');
                                                  modalComentsAlert2 = document.createElement('h6');
                                                  textComentAlert2 = document.createTextNode('Comments: ');
                                                  textBody2 = document.createTextNode("".concat(elem.body));
                                                  textHead2 = document.createTextNode("Title: \"".concat(elem.title, "\""));
                                                  textSign2 = document.createTextNode('close');
                                                  modalFade2.classList.add('modal');
                                                  modalFade2.classList.add('fade');
                                                  modalFade2.setAttribute('id', "userTitle".concat(elem.id));
                                                  modalFade2.setAttribute('tabindex', '-1');
                                                  modalFade2.setAttribute('role', 'dialog');
                                                  modalFade2.setAttribute('aria-labelledby', 'exampleModal3Label');
                                                  modalFade2.setAttribute('aria-hidden', 'true');
                                                  modalDialog2.classList.add('modal-dialog');
                                                  modalDialog2.setAttribute('role', 'document');
                                                  modalContent2.classList.add('modal-content');
                                                  modalHeader2.classList.add('modal-header');
                                                  modalTitle2.classList.add('modalTitle');
                                                  modalTitle2.setAttribute('id', 'exampleModal3Label');
                                                  xButton2.classList.add('close');
                                                  xButton2.setAttribute('type', 'button');
                                                  xButton2.setAttribute('data-dismiss', 'modal');
                                                  xButton2.setAttribute('aria-label', 'Close');
                                                  span2.setAttribute('aria-hidden', 'true');
                                                  modalBody2.classList.add('modal-body');
                                                  modalBodyH2.classList.add('body-text');
                                                  body.append(modalFade2);
                                                  modalFade2.append(modalDialog2);
                                                  modalDialog2.append(modalContent2);
                                                  modalContent2.append(modalHeader2);
                                                  modalHeader2.append(modalTitle2);
                                                  modalHeader2.append(xButton2);
                                                  xButton2.append(span2);
                                                  modalContent2.append(modalBody2);
                                                  modalBody2.append(modalBodyH2);
                                                  modalBodyH2.append(textBody2);
                                                  modalBody2.append(modalComentsAlert2);
                                                  modalComentsAlert2.append(textComentAlert2);
                                                  modalTitle2.append(textHead2);
                                                  span2.append(textSign2);
                                                  _context2.next = 51;
                                                  return fetch("https://jsonplaceholder.typicode.com/comments?postId=".concat(elem.id));

                                                case 51:
                                                  responceCom2 = _context2.sent;
                                                  _context2.next = 54;
                                                  return responceCom2.json();

                                                case 54:
                                                  responceComments2 = _context2.sent;
                                                  responceComments2.forEach(function (item) {
                                                    var modalCommentsHead2 = document.createElement('h6');
                                                    var modalCommentsBody2 = document.createElement('p');
                                                    var textCommentsHead2 = document.createTextNode("".concat(item.name, "(").concat(item.email, ")"));
                                                    var textCommentsBody2 = document.createTextNode("".concat(item.body));
                                                    modalBody2.append(modalCommentsHead2);
                                                    modalBody2.append(modalCommentsBody2);
                                                    modalCommentsHead2.append(textCommentsHead2);
                                                    modalCommentsBody2.append(textCommentsBody2);
                                                  });

                                                case 56:
                                                case "end":
                                                  return _context2.stop();
                                              }
                                            }
                                          }, _callee2, this);
                                        }));

                                        return function (_x4) {
                                          return _ref5.apply(this, arguments);
                                        };
                                      }());
                                    });

                                  case 20:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, this);
                          }));

                          return function (_x3) {
                            return _ref4.apply(this, arguments);
                          };
                        }());

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getPost() {
    return _ref.apply(this, arguments);
  };
}();

getPost();