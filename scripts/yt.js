$('#themeModal').on('hidden.bs.modal', function() {
  $('#themeModal iframe').removeAttr('src');
});
