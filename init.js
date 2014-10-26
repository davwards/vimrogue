$(document).on('ready', function(event) {
  keyListener = new VimRogue.KeyListener(window, function() {
    $('#world').text(JSON.stringify(arguments));
  });
  keyListener.startListening();
});
// $(window).on('keyup', function(event) {
  // $('#world').text(event.keyCode + ' ' + event.shiftKey);
// });
