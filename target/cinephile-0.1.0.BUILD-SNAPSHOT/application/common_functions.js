var common_functions = {

    change: function (event, model) {
        // Remove any existing alert message
        utils.hideAlert();

        // Apply the change to the model
        var target = event.target;
        var change = {};
        change[target.name] = target.value;
        model.set(change);

        // Run validation rule (if any) on changed item
        var check = utils.validateItem(target.id, model);
        if (check.isValid === false) {
            utils.addValidationError(target.id, check.message);
        } else {
            utils.removeValidationError(target.id);
        }        
    },

};