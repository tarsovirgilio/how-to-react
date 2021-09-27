import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
  const [cards, setCards] = useState([
    { 
      id: faker.random.alphaNumeric(10),
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      carrer: faker.name.jobTitle(),
    },
    {
      id: faker.random.alphaNumeric(10),
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      carrer: faker.name.jobTitle(),
    },
    {
      id: faker.random.alphaNumeric(10),
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      carrer: faker.name.jobTitle(),
    },
  ]);

  const handleDelete = (cardIndex) => {
    console.log(cards);
    const cardsCopy = [...cards];
    cardsCopy.splice(cardIndex, 1);
    setCards(cardsCopy);
  };

  const handleChangeName = (event, id) => {
    const cardIndex = cards.findIndex(card=>card.id===id);
    const cardsCopy = [...cards];
    cardsCopy[cardIndex].name = event.target.value;
    setCards(cardsCopy);
  };

  const cardslist = cards && (cards.map((card, index)=>
    <Card 
      avatar= {card.avatar}
      name={card.name} 
      carrer={card.carrer}
      key={card.id}
      onDelete={()=>handleDelete(index) }
      onChangeName={(event)=>handleChangeName(event, card.id)}/>
    )
  );

  return (
    <div className="App">
      {cardslist}
    </div>
  );
}

export default App;
