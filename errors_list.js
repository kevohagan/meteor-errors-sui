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
        animation : 'scale',
        duration  : '3s',
        complete  : function() {
          Meteor.Errors.clear()
        }
      });

};