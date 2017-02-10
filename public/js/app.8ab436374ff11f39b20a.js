webpackJsonp([1,2],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Form_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Menu_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Menu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__core_Menu_js__);
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
        menu: new __WEBPACK_IMPORTED_MODULE_1__core_Menu_js__["default"]()
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

/***/ 31:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jhmilan/bittenbyte/uptime-monitor/resources/assets/js/core/Errors.js'");

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Errors_js__);
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

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors_js__["default"]();

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
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jhmilan/bittenbyte/uptime-monitor/resources/assets/js/core/Menu.js'");

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(12);


/***/ })

},[35]);