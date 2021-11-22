// jQuery

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.project .button-container .btn').click(function(){
        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.project .image-container .box').show('400')
        }
        else{
            $('.project .image-container .box').not('.'+filter).hide('200');
            $('.project .image-container .box').filter('.'+filter).show('400');
        }
    });

    $('#theme-toggler').click(function(){
        $(this).toggleClass('fa-sun');
        $('body').toggleClass('dark-theme');
    });

    // color theme
    $('#theme1').click(function(){
        $(this).toggleClass('fa-palette');
        $('body').toggleClass('font-theme1');
    });
    $('#theme2').click(function(){
        $(this).toggleClass('fa-palette');
        $('body').toggleClass('font-theme2');
    });
    $('#theme3').click(function(){
        $(this).toggleClass('fa-palette');
        $('body').toggleClass('font-theme3');
    });
    $('#theme4').click(function(){
        $(this).toggleClass('fa-palette');
        $('body').toggleClass('font-theme4');
    });
    //icon
   

  

  

   
   
});

