$(document).ready(function(){
    $('#menu-toggle').click(function(){
        $('.menu').slideToggle();
    });

    $('#main-nav .menu > li > a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
    });
});