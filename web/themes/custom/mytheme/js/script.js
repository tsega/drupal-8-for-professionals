(function ($, Drupal) {
  Drupal.behaviors.helloWorld = {
    attach: function (context, settings) {
      $("body")
      .once()
      .append("<p>Hello World!</p>");
    }
  };
}(jQuery, Drupal));