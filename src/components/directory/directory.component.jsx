import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;

// function expression
var canada = () => {
  console.log('cold');
}

// function declaration
function india() {
  console.log('warm');
}

// function invocation/call/execution
canada();
india();

function marry(person1, person2) {
  console.log('arguments', arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')


function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local environment
  two(); // new EC
}

var isValid = false;
one();

// two() -- undefined
// one() -- true
// global() --false

function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    return function printName() {
      var c = 'c';
      console.log(c, b, a);
      return 'Andrei Neagoie';
    }
  }
}

sayMyName()()();