$(document).ready(function(){
    $("#iconOpen").click(function(){
        $("#sideNav").css('width', "+=250");                                   
        $("body").css('background-color', "rgba(0,0,0,0.4)");
        $("#responsiveTopMenu").css('display', 'none');
    });        
    $("#iconClose").click(function(){
        $("#sideNav").css('width', "0");                    
        $("#main").css('margin-left', "0");
        $("body").css('background-color', "rgb(255,255,255, .4)");
        $("#iconOpen").css('display', 'initial');
        $("#responsiveTopMenu").css('display', 'initial');
    });        
});