var Todos = new require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachmenet: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachmenet: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachmenet: false
            }
        ];

        Todos.create(starterTodos, function (err, results) {
            res.send(results);
        });
    });
};