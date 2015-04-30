require.config({
    // for development purpose, ensure the newest version js at each time
    urlArgs: "bust=" + (new Date()).getTime(),

    paths: {
        'jquery': '/static/jquery/dist/jquery',
        'underscore': '/static/underscore/underscore',
        'backbone': '/static/backbone/backbone',
        'bootstrap': '/static/bootstrap/dist/js/bootstrap',
        'bootstrap_table': '/static/bootstrap-table/src/bootstrap-table',
        'text': '/static/requirejs-text/text',
        'dropzone': '/static/dropzone/dist/dropzone-amd-module',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define('kickstart', function (require) {
    // import external js modules
    require('bootstrap');

    // define global variables here if needed
    // `cntapp` contains the current state of the application
    cntapp = require('app');

    Backbone.history.start();
});

require(['jquery'], function($) {
    $(document).ready(function () {
        require(['kickstart']);
    });
});
