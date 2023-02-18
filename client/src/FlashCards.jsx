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

    changeSelect(tense);

    let tenses = [];

    console.log(props.conj.data)


    for (let i = 0; i < words.length; i++) {

      // console.log(words[i], tense)

      if (words[i].conj_type === tense) {
        console.log('somethin')
        tenses.push(words[i])
      }

    }

    console.log('tesn', tenses)

    // changeTense(tenses);

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