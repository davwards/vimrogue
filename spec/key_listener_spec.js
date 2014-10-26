describe('KeyListener', function() {

  beforeEach(function(){
    this.container = jasmine.createSpy('window');
    this.keyPressCallback = jasmine.createSpy('keyPressCallback');
    this.keyListener = new VimRogue.KeyListener(this.container, this.keyPressCallback);
    this.keyListener.startListening();
  });

  describe('when a basic key is pressed', function() {
    beforeEach(function() {
      this.event = $.Event('keyup', { keyCode: 65 }); // 65 => 'a'
    });

    it('calls the provided callback with the name of the key', function(){
      $(this.container).trigger(this.event);
      expect(this.keyPressCallback).toHaveBeenCalledWith('a', {})
    });

    describe('with the shift key', function() {
      beforeEach(function() {
        this.event.shiftKey = true;
      });

      it('calls the provided callback with the capitalized name of the key', function(){
        $(this.container).trigger(this.event);
        expect(this.keyPressCallback).toHaveBeenCalledWith('A', {})
      });
    });

    describe('with the control key', function() {
      beforeEach(function() {
        this.event.ctrlKey = true;
      });

      it('calls the provided callback with the name of the key and the ctrl option', function(){
        $(this.container).trigger(this.event);
        expect(this.keyPressCallback).toHaveBeenCalledWith('a', {ctrl: true})
      });
    });
  });

  describe('when a numeric key is pressed with shift', function(){
    beforeEach(function() {
      this.event = $.Event('keyup', { keyCode: 49, shiftKey: true }); // 49 => '1'
    });

    it('calls the provided callback with the appropriate symbol', function(){
      $(this.container).trigger(this.event);
      expect(this.keyPressCallback).toHaveBeenCalledWith('!', {})
    });
  });

  describe('when the shift key is pressed', function() {
    beforeEach(function() {
      this.event = $.Event('keyup', { keyCode: 16 });
    });

    it('does not call the provided callback', function(){
      $(this.container).trigger(this.event);
      expect(this.keyPressCallback).not.toHaveBeenCalled();
    });
  });

  describe('when the control key is pressed', function() {
    beforeEach(function() {
      this.event = $.Event('keyup', { keyCode: 17 });
    });

    it('does not call the provided callback', function(){
      $(this.container).trigger(this.event);
      expect(this.keyPressCallback).not.toHaveBeenCalled();
    });
  });

  describe('when the escape key is pressed', function() {
    beforeEach(function() {
      this.event = $.Event('keyup', { keyCode: 27 });
    });

    it('calls the provided callback with the key name "ESC"', function(){
      $(this.container).trigger(this.event);
      expect(this.keyPressCallback).toHaveBeenCalledWith('ESC', {});
    });
  });
});
