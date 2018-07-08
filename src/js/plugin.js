$( function() {

    var sidebar_btn = $('.mobile-siderbar-btn');
    var main = $('main');
    var overlay = $('.overlay');


    sidebar_btn.on('click', function (e) {
        main.toggleClass('show');
    })

    overlay.on('click', function (e) {
        main.toggleClass('show');
    })
});