/**
 * @file
 * This file provides a listener event to click button of payment page.
 */

(function ($) {
  Drupal.behaviors.commerceRedecard = {
    attach: function (context, settings) {
      $('.super-button', context).click(function () {
        var print_path = Drupal.settings['commerce_redecard']['print_path'];

        return window.open(print_path, '_blank', 'width=280,height=440,left=0,top=100,screenX=0,screenY=100');
      });
    }
  };
})(jQuery);
