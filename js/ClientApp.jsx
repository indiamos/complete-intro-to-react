import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;
const MyTitle = function MyTitle(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function MyFirstComponent() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'House of Cards', color: 'Lime' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
  );
};
render(ce(MyFirstComponent), document.getElementById('app'));
