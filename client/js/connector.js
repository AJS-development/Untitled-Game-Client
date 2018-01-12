var parser = document.createElement('a');





window.connectToServer = function (url) {
    parser.href = url;


    var node = $('#script')
    var game = document.createElement('script');
    game.type = 'text/javascript';
    game.src = parser.protocol + '//' + parser.host + '/game.js';
    node.append(game);
}


var mode = 0;

document.addEventListener('DOMContentLoaded', function () {
    $('#titleScreen > .fa-spinner').hide();

    document.addEventListener('keyup', function (a) {
        if (13 === (a.which || a.keyCode)) {
            if (mode === 0) {
                window.connectToServer($('#server').value);
                $('#server').hide()
                $('#titleScreen > .fa-spinner').show();
                mode = 1;
            } else {
                $('#titleScreen').hide();

            }
        }
    })
}, false);



window.loaded = function () {
    $('#titleScreen > .fa-spinner').hide();

    $('#titleScreen > h1').animate({
        fontSize: '60px',
        top: '50%'
    }, {
        duration: 700,
        queue: false,
        done: function () {

            $('#username, #play').animate({
                display: 'block',
                width: '300px'
            }, 300);
        }
    })
}
