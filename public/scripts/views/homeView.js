'use strict';

(function(module) {
    const homeView = {};

    homeView.init = function() {
        $('#contacts').empty();
        $('body').css('background', 'green');
        $('#content').text('Welcome to the home page!');
    };


    module.homeView = homeView;
})(window);