import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conjugations from './Conjugations.jsx';
import Phrases from './CommonPhrases.jsx';
import Words from './CommonWords.jsx';
import Method from './Method.jsx';
import FlashCards from './FlashCards.jsx';

const HomePage = () => {

  const [data, setData] = useState([]);
  const [done, setDone] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get('/conj')
      .then((data) => {
        console.log('DATA ', data)
        setData(data);
        setDone(true);
      })
      .catch((err) => {
        console.log('there was an error fetching conjugations')
      })
  }, []);


  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>Welcome to Learn Spanish</h1>
        <h2>I am going to lay out functional spanish that will get you speaking quick</h2>
      </div>
      {/* {done ? <Conjugations conj = {data}/> : null} */}
      {done ? <FlashCards conj = {data}/> : null}
      {/* <Conjugations conj = {data}/> */}
      {/* <Phrases /> */}
      {/* <Words /> */}
      {/* <Method /> */}

    </div>
  )
}

export default HomePage;