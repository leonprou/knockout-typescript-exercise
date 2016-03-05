require.config({
    baseUrl: "",
    paths: {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "knockout": "bower_components/knockout/dist/knockout.debug",
        "daterangepicker": "https://cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker",
        "underscore": "bower_components/underscore/underscore",
        "moment": "bower_components/moment/moment",
        "moment-timezone": "http://momentjs.com/downloads/moment-timezone-with-data-2010-2020"

    },
    shim: {
        "jquery": {
            exports: "$"
        }
    }
});
require(["src/main"]);
