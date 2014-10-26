$(document).on('ready', function(event) {
  keyListener = new VimRogue.KeyListener(window, function() {
    $('#world').text(JSON.stringify(arguments));
  });
  keyListener.startListening();
});
