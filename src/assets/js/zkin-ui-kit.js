jQuery(document).ready(function() {
	
    "use strict";

    /***********************************************
    Custom js here
    ************************************************/

    // Input group custom file customization //
    $(".input-group").each(function(){
        var $this = $(this),
            inputGroupFileInput = $this.find(".custom-file-input"),
            inputGroupFocusBg = $this.find(".input-focus-bg");

        inputGroupFileInput.blur(function() {
            inputGroupFocusBg.toggleClass("custom-file-focus-bg");
        });
    });

    $(".custom-file-input:disabled").parent(".custom-file").addClass("input-group-file-disabled");
    
});