import React, { useState, useEffect } from 'react';

const Card = (props) => {

  console.log('cardprops', props)

  const [flipped, flip] = useState(false);
  const [card, setCard] = useState([]);

  useEffect(() => {

    let card = getRandCard(props.data);
    setCard(card);

    console.log(card);
  }, []);

  const newCard = () => {
    let card = getRandCard(props.data);
    setCard(card);
    flip(false);
  }

  const getRandCard = (cards) => {
    let personArr = ['yo', 'tu', 'el', 'nos', 'ellos'];

    let item = cards[Math.floor(Math.random()*cards.length)];
    let randPerson = personArr[Math.floor(Math.random()*personArr.length)];

    let conj_def = randPerson + '_def';
    let sentence = randPerson + '_ex';

    let card = {
      word: item.word,
      conj_type: item.conj_type,
      person: randPerson,
      conj_ending: item[randPerson],
      conj_def: item[conj_def],
      sentence: item[sentence],
      exp: item.explanation
    }

    return card;
  }

  return (
    <div>

      {flipped ?
      <div className="card-flipped">
        <h1>{card.conj_ending}</h1>
        <h2>{card.conj_def}</h2>
        <h3>{card.sentence}</h3>

        <button onClick = {() => flip(!flipped)}>flip</button>
       </div>
      :

      <div className="card-not-flipped">
        <h1>{card.word}</h1>
        <h3>{card.person}</h3>
        <h3>{card.conj_type}</h3>
        <p>{card.exp}</p>


        <button onClick = {() => flip(!flipped)}>flip</button>
      </div>
      }

    <button onClick = {() => newCard()}>new word</button>
    </div>
  )
}

export default Card;