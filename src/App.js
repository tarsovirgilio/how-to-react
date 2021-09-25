import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
  const [name, setName] = useState(faker.name.findName())
  const cardButtons = (
    <div>
      <button class="button b utton2">yes</button>
      <button class="button button3">no</button>
    </div>
  );

  const handleChangeName = () => {
    // setName(`${faker.name.firstName() + ' ' + faker.name.lastName()}`)
    setName(`Tarso Virgilio`)
  };

  return (
    <div className="App">
      <button className='button' onClick={handleChangeName}> Change Name </button>
      <Card 
        avatar= {`${faker.image.avatar()}`}
        name={name} 
        carrer={`${faker.name.jobTitle()}`}>
        {cardButtons}
      </Card>
      <Card 
        avatar= {`${faker.image.avatar()}`}
        name={`${faker.name.findName() + ' ' + faker.name.lastName()}`} 
        carrer={`${faker.name.jobTitle()}`}>
        {cardButtons}
      </Card>
      <Card 
        avatar= {`${faker.image.avatar()}`}
        name={`${faker.name.findName() + ' ' + faker.name.lastName()}`} 
        carrer={`${faker.name.jobTitle()}`}>
        {cardButtons}
      </Card>
    </div>
  );
}

export default App;
