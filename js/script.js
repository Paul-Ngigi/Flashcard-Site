$(document).ready(function(){
    console.log("Content Loaded");

    $('.js-clickable').click(function(){
        $('#js-hidden').slideToggle();
        $('#js-visible').slideToggle();
    });
    $(".operator-click").click(function(){
        $("#operator-visible").slideToggle();
        $("#operator-hidden").slideToggle();
    })
});