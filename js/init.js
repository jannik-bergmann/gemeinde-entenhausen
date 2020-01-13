$( document ).ready(function() {
    
  setTitle();
  loadNavBar();
  loadFooter();
  setActiveSite();
  togglePopover();

});

function loadFooter(){
  $("body").append(
    "<footer  id='footer' class='py-5 bg-dark'>"+
      "<div class='container'>"+
        "<p class='m-0 text-center text-white'>Copyright &copy; Gemeinde Entenhausen</p>"+
      "</div>"+
    "</footer>"
  );
}

function setTitle(){
  document.getElementById("title").innerHTML= "EntenHausen";
}

function setActiveSite(){
    $.each($('#navbar').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    });
}

function togglePopover(){
    $(function () {
        $('[data-toggle="popover"]').popover()
      }) 
}

function loadNavBar(){
    $("body").prepend(
        "<div id = 'navbar'></div>"
    );

    document.getElementById("navbar").innerHTML= getNavString();
}

function getNavString(){
    return '<nav class="navbar navbar-expand-lg navbar-light bg-primary">'+
    '<a class="navbar-brand" href="index.html">Gemeinde Entenhausen</a>'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"'+
      'aria-label="Toggle navigation">'+
      '<span class="navbar-toggler-icon"></span>'+
    '</button>'+
    '<div class="collapse navbar-collapse" id="navbarNav">'+
      '<ul class="navbar-nav mr-auto">'+
        '<li class="nav-item active">'+
        '<a class="nav-link" href="index.html">Home</a>'+
        '</li>'+
        '<li class="nav-item">'+
          '<a class="nav-link" href="rathaus.html">Rathaus</a>'+
        '</li>'+
        '<li class="nav-item dropdown">'+
          '<a class="nav-link " href="freizeit.html" >Leben & Freizeit</a>'+
          
          '</li>'+
        '<li class="nav-item">'+
          '<a class="nav-link" href="kontakt.html">Kontakt</a>'+
        '</li>'+
        '<li class="nav-item">'+
          '<a class="nav-link" href="fundbuero.html">Fundbüro</a>'+
        '</li>'+
      '</ul>'+
      '<ul class="navbar-nav ml-auto">'+
      '<li class="nav-item">'+
          '<a class="nav-link" href="impressum.html">Impressum</a>'+
        '</li>'+
      '</ul>'+
    '</div>'+
  '</nav>'
}