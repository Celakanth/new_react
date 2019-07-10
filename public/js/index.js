'use strict';

console.log('App is running');

// JSX base file
var app = {
    title: 'My Details',
    options: ['Item one', 'Item two', 'Item 3']
};
var title = 'My Deatils';
var user = {
    name: 'Christian',
    age: 20
};

var getLocation = function getLocation(location) {
    if (location) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'label',
                null,
                'Location '
            ),
            React.createElement('input', { type: 'text', value: location, readOnly: 'readOnly' }),
            ' ',
            React.createElement('br', null)
        );
    }
};

var processItems = function processItems() {
    var allItems = [];
    app.options.forEach(function (item, index) {
        allItems.push(React.createElement(
            'li',
            { key: index, id: index },
            item
        ));
    });

    return allItems;
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        title
    ),
    React.createElement(
        'p',
        null,
        'This is me!'
    ),
    React.createElement(
        'label',
        null,
        'Name '
    ),
    React.createElement('input', { type: 'text', value: user.name ? user.name : 'Unknown' }),
    ' ',
    React.createElement('br', null),
    user.age && user.age >= 18 && React.createElement(
        'div',
        null,
        React.createElement(
            'label',
            null,
            'Age '
        ),
        React.createElement('input', { type: 'text', value: user.age })
    ),
    React.createElement('br', null),
    getLocation(user.location),
    React.createElement(
        'ol',
        null,
        processItems()
    )
);

var appRoot = document.getElementById('root');
ReactDOM.render(template, appRoot);
