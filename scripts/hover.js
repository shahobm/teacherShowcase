$(document).ready(function() {

  $("#abelCard").hover(
    function() { $("#abelInfo").fadeTo('fast','.90'); },
    function() { $("#abelInfo").fadeTo('fast','0'); }
  );

  $("#currierCard").hover(
    function() { $("#currierInfo").fadeTo('fast','.90'); },
    function() { $("#currierInfo").fadeTo('fast','0'); }
  );

  $("#leeCard").hover(
    function() { $("#leeInfo").fadeTo('fast','.90'); },
    function() { $("#leeInfo").fadeTo('fast','0'); }
  );

});
