import React, { useState } from 'react';
import Card from './flashCards/Card.jsx';
import Select from './flashCards/Select.jsx';

const FlashCards = (props) => {

  const [score, setScore] = useState(0);

  return (
    <div>

      <Select />

      <div>Score: {score}</div>

      <Card data = {props.conj.data} />
    </div>
  )
}

export default FlashCards;