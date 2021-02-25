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
    $(".variable-click").click(function(){
        $("#variable-visible").slideToggle();
        $("#variable-hidden").slideToggle();
    })
    $(".variable-n-click").click(function(){
        $("#variable-n-visible").slideToggle();
        $("#variable-n-hidden").slideToggle();
    })
    $(".functions-click").click(function(){
        $("#functions-visible").slideToggle();
        $("#functions-hidden").slideToggle();
    })
});