(function ($) {

/**
 * Custom summary for the module vertical tab.
 */
Backdrop.behaviors.workflow_node_formFieldsetSummaries = {
  attach: function (context) {
    // Use the fieldset id to identify the vertical tab element
    $('fieldset#edit-workflow', context).backdropSetSummary(function (context) {
      return Backdrop.checkPlain($('.form-item-workflow-scheduled input:checked', context).next('label').text());
    });
  }
};

})(jQuery);
