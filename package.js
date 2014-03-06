Package.describe({
    summary: "Showing you app's error messages with semantic-ui"
});
Package.on_use(function(api, where) {
    api.use(['minimongo', 'mongo-livedata', 'templating','coffeescript'], 'client');
    api.add_files(['errors.coffee', 'errors_list.html', 'errors_list.coffee', 'errors.css'], 'client');
});
// Package.on_test(function(api) {
//     api.use('errors', 'client');
//     api.use(['tinytest', 'test-helpers'], 'client');
//     api.add_files('errors_tests.js', 'client');
// });