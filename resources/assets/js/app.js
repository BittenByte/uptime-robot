require('./bootstrap');

import Menu from './core/Menu.js';

const app = new Vue({
    el: '#body-wrapper',

    data: {
        menu: new Menu()
    }
});