import React, { useState } from 'react';
import Card from './flashCards/Card.jsx';
import Select from './flashCards/Select.jsx';

const FlashCards = (props) => {

  const [score, setScore] = useState(0);
  const [select, changeSelect] = useState('All');
  const [cardData, changeTense] = useState([]);


  const updateTense = (event) => {
    let tense = event.target.value;

    const words = props.conj.data;
    let testWord = words[0].conj_type;

    console.log(tense)
    console.log(testWord)

    for (let i = 0; i < words.length; i++) {
      if (words[i].conj_type === ` "${tense}"`) {
        console.log(words[i]);
      }
    }


  }


  return (
    <div>

      <Select updateTense={updateTense} />

      <div>Score: {score}</div>

    {select === 'All' ?
    <Card data = {props.conj.data} />
    :
    <Card data = {0} />
    }
      {/* <Card data = {props.conj.data} /> */}
    </div>
  )
}

export default FlashCards;