
// Main showcase script to handle all actions and inputs, minus the Western search bar
// These element names will probably be changed based on the ID's / Classes of the new elements.

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function resourceShow() {
  var x = document.getElementById("contentSec");
  var y = document.getElementById("resourceBody");
  x.style.display = "block";
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    $("#resource-title a").text("RESOURCES >" + $(this).text().toUpperCase());
    $("#resource-title a").attr('href'. $(this).attr('href'));
  }

}



function resourceHide(){
  var x = document.getElementById("contentSec");
  var y = document.getElementById("resourceBody");
  if (y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  }
}


$('.btn').click(function() {
  $('#ideaDisplay div').hide();
    var target = '#' + $(this).data('target');
    $(target).show();
})

function ideaShow() {
  var x = document.getElementById("load-content");
  var y = document.getElementById("resourceBody");
  x.style.display = "block";
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
  }

}

function ideaHide(){
  var x = document.getElementById("contentSec");
  var y = document.getElementById("loadContent");
  if (y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// DOM Load
$(document).ready(function() {



  // Handle video loads first - this code won't be run unless the page is on the video page

  var rollover = $("#rollover");
  var rollover_title = rollover.find("#rollover_title");
  var rollover_body = rollover.find("#rollover_body");
  var rollover_time = rollover.find("#rollover_time");
  var off_rollover = true;
  roll_in(0);
  roll_out(0);




  // Probably won't be used
  //Elements renamed probably, maybe slightly tweaked code because of the bootstrap classes - possibly using the flex silders / classes - maybe not tho
  function roll_in(i) {
    var a = $("#video-list > a:nth-child(" + (i + 1) + ")");
    var offset = $(a).offset();
    var left = offset.left + a.width();
    var top = offset.top - rollover.height() / 2 + a.height() / 2 + 10;

    off_rollover = false;
    rollover_title.text(videos[i].title);
    rollover_body.text(videos[i].description);
    rollover_time.text(videos[i].time);
    rollover.show();
    rollover.css({top: top, left: left});
  }

  function roll_out(i) {
    off_rollover = true;
    setTimeout(function () {
      if(off_rollover) {
        rollover.hide();
      }
    }, 350);
  }

  rollover.hide();

});
