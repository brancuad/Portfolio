var links = '<div id="links" class="op">' +
            '<div id="openingLinks">' +
                '<a href="./index.html">Home</a>|' +
              //  '<a href="./about.html">About</a>|' +
                '<a href="./resume.html">Resume</a>|' +
                '<a href="./academics.html">Academics</a>|' +
                '<a href="./projects.html">Projects</a>' +
                //'<a href="./contact.html">Contact</a>' +
            '</div>' +
        '</div>';

var card = '<img id="openingImage" src="../Images/Rocks.jpg" />' +
            '<div class="outer">' +
                '<div class="middle">' +
                    '<div id="openingName"> Brandon Cuadrado</div>' +
                    '<div id="openingTitle">' +
                        'Web Development | User Experience' +
                    '</div>' +
                    '<div id="openingBlurb">' +
                        '<a href="mailto:cuadradobr@gmail.com">cuadradobr@gmail.com</a>' +
                    '</div>' +
                '</div>' +
            '</div>'

$ (function () {
    document.title = "Brandon Cuadrado";

    $("#header").append(links);
    $("#card").append(card).addClass("inner op");

    $(".op").attr("style", "opacity: .6;").mouseover(function() {
        $(this).animate({
            opacity: 1, 
        }, {duration: 300, queue: false});
    }).mouseout(function() {
        $(this).animate({
            opacity: .6, 
        }, {duration: 300, queue: false});
    });
    $(".op, #content").fadeIn(600);
});