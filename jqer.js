$(document).ready(function(){

$("#play").toggle(function(){$("#play").text('Play');})
$("#play").toggle(function(){$("#play").text('Pause');})

$(document).on('click', '.slideYThumbnailInside', function (event) {
    var change = $(this).attr("src").split("/");
    $("#stage > iframe").attr("src", "https://www.youtube.com/embed/"change[4]);
            
});   


  });
