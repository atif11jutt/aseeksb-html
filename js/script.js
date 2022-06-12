jQuery(function($){

    // coming up

    $(".coming_item").slideUp(10);

    $(".coming_item_open").click(function(e){
        e.preventDefault()
        $(this).toggleClass("active").parent().find(".coming_item").slideToggle(400);
    });

    

})