// Main showcase script to handle all actions and inputs, minus the Western search bar
// These element names will probably be changed based on the ID's / Classes of the new elements.

// DOM Load
$(document).ready(function() {

  // Handle video loads first - this code won't be run unless the page is on the video page
  var video = $("#video");
  var title = $("#video-title");
  var text = $("#video-text");

  var rollover = $("#rollover");
  var rollover_title = rollover.find("#rollover_title");
  var rollover_body = rollover.find("#rollover_body");
  var rollover_time = rollover.find("#rollover_time");
  var selected = null;
  var off_rollover = true;
  roll_in(0);
  roll_out(0);

  //Elements renamed probably, maybe slightly tweaked code because of the bootstrap classes - possibly using the flex sliders / classes - maybe not tho
  function load_video(i) {
    var li = $("#video-list > li:nth-child(" + (i + 1) + ")");

    if(selected)
      selected.attr("class","");

    $(li).attr("class","selected");
    selected = $(li);

    video.attr("src", videos[i].url + "?wmode=transparent&showinfo=1");
    title.text(videos[i].title);
    text.text(videos[i].description);
    $("#video-desc").text($("#rollover_body").text());
  }

  //Elements renamed probably, maybe slightly tweaked code because of the bootstrap classes - possibly using the flex silders / classes - maybe not tho
  function roll_in(i) {
    var li = $("#video-list > li:nth-child(" + (i + 1) + ")");
    var offset = $(li).offset();
    var left = offset.left + li.width();
    var top = offset.top - rollover.height() / 2 + li.height() / 2 + 10;

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
        rollover.hide()
      }
    }, 350);
  }

  rollover.hide();

  //Continuing - possibly going to have to move everything outside of the DOM ready function, saving these functions just for that


  //To handle the changing of IDEAS when clicking on the Anchors, loading into the ideas-body-content div
  $("#ideas-content a").click(function() {
    var href = $(this).attr('href').split("#");
    $("#ideas-body-content").load("ideas/" + href[1] + ".html" + " #load-content")
  });

  //This part handles the changing of content once the first item has been selected / or the page has been loaded for the first time
  $("#ideasList").change(function() {
    var option = $('#ideasList').find(":selected").attr('value');
    console.log("Loading: ideas/" + option + ".html");
    $("#ideas-body-content").load("ideas/" + option + ".html" + " #load-content");

    // Maybe to be used to change layouts of
    /* if(option == "idea1") {
      $('#contentSec a').css("font-size","6px");
    }
    */

  });



});

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