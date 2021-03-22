
import React from 'react';
import PropTypes from 'prop-types';

function Food({ name , rating}) {
  return(
      <div>
        <h1>I like { name }</h1>
        <h4>{ rating }/5.0</h4>
      </div>

  );
}

const foodILike = [
    { id: 1, name: 'potato', image: '', rating: 5},
    { id: 2, name: 'tomato', image: '', rating: 4.5},
    { id: 3, name: 'kiwi', image: '', rating: 3.7},
    { id: 4, name: 'orange', image: '', rating: 6.5}
    ];

/*function renderFood(item) {
  return(<Food key={item.id} name={item.name}/>);
}*/

Food.propType = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
      /*<div>{foodILike.map(renderFood)}</div>*/
      <div>{foodILike.map(item =>
          <Food
              key={item.id}
              name={item.name}
              rating={item.rating}/>)}
      </div>
  );
}

export default App;
