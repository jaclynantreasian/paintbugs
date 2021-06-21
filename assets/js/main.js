// cache window object

var $window = $(window);

///parallax
$('section[data-type="background"]').each(function(){
    var $bgobj = $(this); //assigning the object
    $(window).scroll(function(){

        //scroll the background at var speed
        //y pos is negative because we are scrolling up

        var yPos=-($window.scrollTop() / $bgobj.data('speed'));

        //put together our final background position
        var coords = '50% '+ yPos +'px';

        //move the background
        $bgobj.css({ backgroundPosition: coords });
    });

});

});