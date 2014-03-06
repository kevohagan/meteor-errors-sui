Meteor.errors = new Meteor.Collection(null)
Meteor.Errors =
  throw: (style,message) ->
    Meteor.errors.insert
      message: message
      style: style
      seen: false

    return

  clear: ->
    Meteor.errors.remove seen: true
    return