const React = require('react');
const ReactDOM = require('react-dom');

const ce = React.createElement;
const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
  );
};
ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
