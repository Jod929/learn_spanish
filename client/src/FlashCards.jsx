import React, { useState } from 'react';
import Card from './flashCards/Card.jsx';
import Select from './flashCards/Select.jsx';

const FlashCards = (props) => {

  const [score, setScore] = useState(0);
  const [select, changeSelect] = useState('All');
  const [cardData, changeTense] = useState([]);


  const updateTense = (event) => {
    let tense = event.target.value;

    if (tense === 'All') {
      changeTense(props.conj.data);
      changeSelect('All');
    } else {
      const words = props.conj.data;

      let tenses = [];

      for (let i = 0; i < words.length; i++) {
        if (words[i].conj_type === ` "${tense}"`) {
          tenses.push(words[i]);
        }
      }

      changeTense(tenses);
      changeSelect('Other');
    }

  }


  return (
    <div>

      <Select updateTense={updateTense} />

      {/* <div>Score: {score}</div> */}

        {select === 'All' ?
        <Card data = {props.conj.data} />
        :
        <Card data = {cardData} />
        }

    </div>
  )
}

export default FlashCards;