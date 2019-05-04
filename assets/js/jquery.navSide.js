$(document).ready(function(){

    // reload on resize page
    $(window).resize(function() { 
        location.reload(); 
    });
    
    // operations to open menu
    $("#iconOpen").click(function() {
        $("#sideNav").css('width', "+=275");                                   
        $("body").css('background-color', "rgba(0,0,0,0.4)");
        $("#responsiveTopMenu").css('display', 'none');
    });      

    // operations to close menu  
    $("#iconClose").click(function() {        

        $("#sideNav").css('width', "0");                    
        $("#main").css('margin-left', "0");
        $("body").css('background-color', "rgb(255,255,255, .4)");
        $("#iconOpen").css('display', 'initial');
        $("#responsiveTopMenu").css('display', 'initial'); // hide submenu on click
        
    });            

    // open close nav-dropdown
    $('#sideNav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });

    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
        $('.nav-dropdown').hide();                
    });   

    // shrink navbar on scroll
    $( window ).scroll(function() {
        // user scrolling > 100px
        if ($(window).scrollTop() > 100) {               
            $("#responsiveTopMenu").css( {
                "height": "50px"
            });   
            $("#responsiveTopMenu ul #iconOpen").css ({ 
                "top": "6px"
            });           
            $("#responsiveTopMenu ul li#logo").css ({
                "padding-top": "10px",
                "margin-right": "25px"
            });
            $("#responsiveTopMenu ul li#logo img").css ({
                "padding": "0px",                    
                "margin": "-10px 0",
                "height": "40px",
                "transition": "all 1.5s"
            });      
            // move social icons on scroll down menu to top menu 
            $("#social li.social").appendTo('#responsiveTopMenu ul'); 
            $("#responsiveTopMenu ul li.social").css ({
                "padding": "15px 0px 0px 15px"
            });
        }
        // restore default size
        if ($(window).scrollTop() < 100) {
            $("#responsiveTopMenu").css( {
                "height": "80px",
                "transition": "all 1.5s"
            });  
            $("#responsiveTopMenu ul #iconOpen").css ({ 
                "top": "13px",
                "right": "15px",
                "transition": "all 1.5s"
            });    
            $("#responsiveTopMenu ul li#logo").css ({
                "padding-top": "15px"
            });
            $("#responsiveTopMenu ul li#logo img").css ({
                "padding": "0px",                    
                "margin": "0",
                "height": "50px",
                "transition": "all 1.5s"
            });  
            // move social icons to side bar
            $("li.social").appendTo('#social');            
        }
    });    
    
});