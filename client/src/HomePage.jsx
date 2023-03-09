import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Conjugations from './Conjugations.jsx';
// import Phrases from './CommonPhrases.jsx';
// import Words from './CommonWords.jsx';
// import Method from './Method.jsx';
import FlashCards from './FlashCards.jsx';

const HomePage = () => {

  const [data, setData] = useState([]);
  const [done, setDone] = useState(false);
  const [page, setPage] = useState('Flash');

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
        <h1>Setting things straight</h1>
        <h2>Please checkout all conjugations and use the flashcards to learn!</h2>
        <button onClick={() => {setPage('Flash')}}>Conjugation Flash Cards</button>
        <button onClick={() => {setPage('Conj')}}>See All Conjugations</button>
        {/* <button onClick={() => {setPage('Phrase')}}>See Common Phrases</button>
        <button onClick={() => {setPage('Words')}}>See Common Words</button>
        <button onClick={() => {setPage('Method')}}>Learning Method</button> */}
      </div>

      {done && page === 'Flash' && <FlashCards conj = {data}/> }
      {done && page === 'Conj' && <Conjugations conj = {data}/> }
      {/* {done && page === 'Phrase' && <Phrases /> }
      {done && page === 'Words' && <Words />}
      {done && page === 'Method' && <Method />} */}

    </div>
  )
}

export default HomePage;