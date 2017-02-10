webpackJsonp([1,2],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Form_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Menu_js__ = __webpack_require__(33);
__webpack_require__(30);

/*
 |--------------------------------------------------------------------------
 | 20170208 - Jose H. Milán
 |--------------------------------------------------------------------------
 |
 | Comprobar /webpack.config.js y /bootstrap.js
 | Estamos intentando hacer una version muy limpia de JS, no hay jquery,
 | así que esta funcion global es un short-cut para la funcion JS nativa
 | querySelector
 |
 */

window.Events = new Vue({});




//global vue instance to bridge events

var app = new Vue({
    el: '#body-wrapper',

    data: {
        contactForm: new __WEBPACK_IMPORTED_MODULE_0__core_Form_js__["a" /* default */]({
            name: '',
            email: '',
            message: ''
        }),
        menu: new __WEBPACK_IMPORTED_MODULE_1__core_Menu_js__["a" /* default */]()
    },

    methods: {
        /**
         * Handles contact form submit action. Promise-based
         */
        onContactFormSubmit: function onContactFormSubmit() {
            this.contactForm.post('/contact').then({}).catch(function (errors) {});
        },
        onMenuOptionClicked: function onMenuOptionClicked(e, target) {
            this.menu.handleClick(e, target);
        }
    },

    mounted: function mounted() {
        // Events.$on('scrollStartingAnimation', () => this.menu.close());
        // this.scroll.init();
    }
});

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {// window._ = require('lodash');

window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(1);

window.Vue = __webpack_require__(5);

window.axios = __webpack_require__(4);

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
    /**
     * Create a new Menu instance.
     * 
     * @param {object} data
     */
    function Menu() {
        _classCallCheck(this, Menu);

        this.isVisible = false;
        this.init();
    }

    /**
     * Attaches glogal events.
     */


    _createClass(Menu, [{
        key: 'init',
        value: function init() {
            var _this = this;

            window.addEventListener('keyup', function (e) {
                if (e.keyCode == 27) {
                    _this.close();
                }
            });
        }

        /**
         * Open menu mobile (based on shared state)
         */

    }, {
        key: 'open',
        value: function open() {
            this.isVisible = true;
        }

        /**
         * Close menu mobile (based on shared state)
         */

    }, {
        key: 'close',
        value: function close() {
            this.isVisible = false;
        }
    }]);

    return Menu;
}();

/* harmony default export */ __webpack_exports__["a"] = Menu;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
    /**
     * Create a new Menu instance.
     * 
     * @param {object} data
     */
    function Menu() {
        _classCallCheck(this, Menu);

        this.isVisible = false;
        this.init();
    }

    /**
     * Attaches glogal events.
     */


    _createClass(Menu, [{
        key: 'init',
        value: function init() {
            var _this = this;

            window.addEventListener('keyup', function (e) {
                if (e.keyCode == 27) {
                    _this.close();
                }
            });
        }

        /**
         * Open menu mobile (based on shared state)
         */

    }, {
        key: 'open',
        value: function open() {
            this.isVisible = true;
        }

        /**
         * Close menu mobile (based on shared state)
         */

    }, {
        key: 'close',
        value: function close() {
            this.isVisible = false;
        }
    }]);

    return Menu;
}();

/* harmony default export */ __webpack_exports__["a"] = Menu;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(12);


/***/ })

},[35]);