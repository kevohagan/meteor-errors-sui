Template.meteorErrors.helpers({
    errors: function() {
        return Meteor.errors.find();
    }
});
Template.meteorError.rendered = function() {
    var error = this.data;
    Meteor.defer(function() {
        Meteor.errors.update(error._id, {
            $set: {
                seen: true
            }
        });
    });

    $('.message')
    .transition({
        animation : 'fade down',
        duration  : '2s',
    })
    .transition({
        animation: 'fade down',
        duration: '3s',
        complete : function() {
            Meteor.setTimeout(function() {
                Meteor.Errors.clear();
            }, 1000);
        }
    });

};