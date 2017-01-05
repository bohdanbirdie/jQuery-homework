(function($) {
  $.fn.trunc = function(letters, sentences) {
    var initialText = this.text();
    var $parentNode = this;
    var initialTextArr;
    var outputText = '';


    $span = $('<span class="trunc"> ...</span>');
    $span.click(function() {
      $parentNode.text(initialText);
      $parentNode.toggleClass('shorten');
    });


    this.css("color", "#405952");
    if (this.text().split(' ').length >= letters) {
      initialTextArr = this.text().split('.');
      for (var i = 0; i <= sentences; i++) {
        outputText += initialTextArr[i] + ".";
      }
      this.text(outputText);
      this.toggleClass('shorten')
      this.append($span);
    }
  };

}(jQuery));
