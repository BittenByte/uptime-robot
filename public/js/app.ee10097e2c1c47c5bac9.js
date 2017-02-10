webpackJsonp([1,2],{

/***/ 10:
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

window.$ = function (selector) {
    return document.querySelectorAll(selector);
};

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

/***/ 11:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// window._ = require('lodash');

// window.$ = window.jQuery = require('jquery');

window.Vue = __webpack_require__(4);

window.axios = __webpack_require__(3);

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
     * Determine if an error exists for a given field.
     * 
     * @param {string}
     * 
     * @return {Boolean}
     */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Determine if we have any errors.
         * 
         * @return {Boolean}
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Retrieve the error message for a field.
         * 
         * @param  {string} field
         * 
         * @return {string}
         */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
         * Record the new errors.
         * 
         * @param  {object} errors
         */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         * 
         * @param  {string} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];

                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = Errors;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors_js__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    /**
     * Create a new Form instance.
     * 
     * @param {object} data
     */
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors_js__["a" /* default */]();

        this.isLoading = false;
        this.showFlash = false;
        this.flashMessage = '';
    }

    /**
     * Fetch all relevant data for the form.
     * 
     * @return {object}
     */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = Object.assign({}, this);

            delete data.originalData;
            delete data.errors;

            return data;
        }

        /**
         * Reset the form fields
         */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            //hide and clear flash message
            this.errors.clear();
        }

        /**
         * Shortcut to (post) submit the form
         * 
         * @param  {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Submit the form
         * 
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.isLoading = true;

                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);
                    _this.isLoading = false;
                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data);
                    _this.isLoading = false;
                    reject(error.response.data);
                });
            });
        }

        /**
         * Handle a successful form submission
         * 
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.showFlash = true;
            this.flashMessage = data.message;
            this.flashClass = 'message is-success';

            this.reset();
        }

        /**
         * Handle a failed form submission
         * 
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(errors) {
            if (errors.hasOwnProperty('server') && errors.server.hasOwnProperty('error')) {
                this.showFlash = true;
                this.flashMessage = errors.server.error;
                this.flashClass = 'message is-danger';
            }

            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = Form;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scroll_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Scroll_js__);
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
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0__Scroll_js__["default"]();
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
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var id = target ? '#' + target : '#body-wrapper';
            var $element = $(id);

            //In case the target element exists, scroll to it and prevent propagation
            if ($element.length > 0) {
                event.preventDefault();
                this.close();
                this.scroll.toElement($element);
            }
        }
    }]);

    return Menu;
}();

/* harmony default export */ __webpack_exports__["a"] = Menu;

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jhmilan/bittenbyte/uptime-monitor/resources/assets/js/core/Scroll.js'");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ })

},[36]);