/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/custom/app.js":
/*!******************************!*\
  !*** ./src/js/custom/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todos =
/*#__PURE__*/
function () {
  function Todos() {
    _classCallCheck(this, Todos);
  }

  _createClass(Todos, [{
    key: "init",
    value: function init() {
      this.cacheDOM();
      this.events();
    } // cache all elements

  }, {
    key: "cacheDOM",
    value: function cacheDOM() {
      this.todoList = document.querySelector('.todo-list'); // create todo

      this.btnCreate = document.querySelector('.btn-create');
      this.inputCreate = document.querySelector('.input-create'); // edit todo

      this.btnEdit = document.querySelector('.btn-edit');
      this.editMode = false; // delete todo

      this.btnsDelete = Array.from(document.querySelectorAll('.btn-delete'));
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      this.btnCreate.addEventListener('click', function () {
        return _this.create();
      });
      this.btnEdit.addEventListener('click', function () {
        return _this.edit();
      }); // dynamic events

      document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-delete')) {
          _this.delete(e);
        }

        if (e.target.classList.contains('btn-confirm')) {
          _this.confirmDelete(e);
        }
      }); // enter key

      this.inputCreate.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
          _this.btnCreate.click();
        }
      });
    }
  }, {
    key: "create",
    value: function create() {
      var todo = document.createElement('div');
      todo.className = 'todo';
      var todoMarkup = "\n            <input class=\"hidden btn btn-delete\" type=\"button\" value=\"X\">\n            <input class=\"todo-checkbox\" type=\"checkbox\">\n            <input type=\"text\" name=\"todo\" value=\"".concat(this.inputCreate.value, "\" />\n            <input class=\"hidden btn btn-confirm\" type=\"button\" value=\"\u221A\">\n        ");
      todo.innerHTML = todoMarkup;
      this.todoList.appendChild(todo);
      this.inputCreate.value = '';
    }
  }, {
    key: "edit",
    value: function edit() {
      var btnDelete = Array.from(document.querySelectorAll('.btn-delete'));
      var checkboxes = Array.from(document.querySelectorAll('.todo-checkbox'));

      if (this.editMode === false) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }

      this.btnCreate.disabled = this.editMode;
      this.inputCreate.disabled = this.editMode;
      checkboxes.map(function (checkbox) {
        checkbox.classList.toggle('hidden');
      });
      btnDelete.map(function (checkbox) {
        checkbox.classList.toggle('hidden');
      });
    }
  }, {
    key: "delete",
    value: function _delete(e) {
      var confirm = e.target.parentNode.lastChild.previousSibling;

      if (confirm.classList.contains('btn-confirm')) {
        confirm.classList.toggle('hidden');
      }
    }
  }, {
    key: "confirmDelete",
    value: function confirmDelete(e) {
      e.target.parentNode.remove();
    }
  }]);

  return Todos;
}();

var todos = new Todos();
todos.init();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./custom/app */ "./src/js/custom/app.js");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map