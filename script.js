(function() {

    $('#live-chat header').on('click', function() {

        $('.chat').slideToggle(300, 'swing');

    });

    $('.contacts-close').on('click', function(e) {

        e.preventDefault();
        $('#live-chat').fadeOut(300);

    });

}) ();
