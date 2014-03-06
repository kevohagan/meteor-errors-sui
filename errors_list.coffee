Template.meteorErrors.helpers
  errors: ->
    Meteor.errors.find()

Template.meteorError.created = () ->
  error = @data

  $(".ui.modal").modal("setting",
    onShow: ->
      Meteor.errors.update error._id,
        $set:
          seen:true

    onHide: ->
      Meteor.Errors.clear()
      console.log "Testingmodal"
  ).modal "show"
  return

# Template.meteorError.rendered = () ->
#   error = @data

#   $("#sui-error").modal("setting",
#     onShow: ->
#       Meteor.errors.update error._id,
#         $set:
#           seen:true

#     onHide: ->
#       Meteor.Errors.clear()
#       console.log "Testingmodal"
#       Meteor.setTimeout (->
#         $("#sui-error").remove()
#         return
#       ), 500

#   ).modal "show"
#   return

Template.meteorError.destroyed = () ->
  console.log "destroyed"