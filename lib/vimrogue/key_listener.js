VimRogue.KeyListener = function KeyListener(container, keyPressCallback) {
  this.container = container;
  this.keyPressCallback = keyPressCallback;
}

_.extend(VimRogue.KeyListener.prototype, {

  startListening: function() {
    keyListener = this;
    $(this.container).on('keyup', function(event) {
      keyListener.handleKeyUp(event);
    });
  },

  handleKeyUp: function(event) {
    if(this.ignoreKey(event)) return;
    keyname = this.keyNameForEvent(event);
    options = {}

    if(event.ctrlKey) options.ctrl = true

    this.keyPressCallback(keyname, options);
  },

  ignoreKey: function(keyEvent) {
    return $.inArray(event.keyCode, this.blacklistedKeyCodes) >= 0;
  },

  keyNameForEvent: function(keyEvent) {
    if(keyname = this.specialKeyNames[event.keyCode])
      return keyname;
    else {
      keyname =  String.fromCharCode(event.keyCode).toLowerCase();
      if(event.shiftKey) keyname = this.shiftMap[keyname];
      return keyname;
    }
  },

  blacklistedKeyCodes: [
    16, 17
  ],

  specialKeyNames: {
    27: 'ESC'
  },

  shiftMap: {
    '`': '~',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    '\\': '|',
    ';': ':',
    '\'': '"',
    '.': '>',
    ',': '<',
    '/': '?',
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'h': 'H',
    'i': 'I',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'm': 'M',
    'n': 'N',
    'o': 'O',
    'p': 'P',
    'q': 'Q',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'W',
    'x': 'X',
    'y': 'Y',
    'z': 'Z'
  }

});
