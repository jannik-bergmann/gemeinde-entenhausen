


$( document ).ready(function() {
    
    $("#buttonVeranstaltungen").click(function() {
        $('html,body').animate({
            scrollTop: $("#toVeranstaltungen").offset().top},
            'slow');
    });

    $("#buttonSport").click(function() {
        $('html,body').animate({
            scrollTop: $("#toSport").offset().top},
            'slow');
    });

    $("#buttonKino").click(function() {
        $('html,body').animate({
            scrollTop: $("#toKino").offset().top},
            'slow');
    });
  
  });