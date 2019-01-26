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
    
    // Toggle open and close nav styles on click
    /*$('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
    });
    
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });*/
    
});