import React from 'react';

const Conjugations = (props) => {
  return (
    <div className="conj-container">

      <h1>All Conjugations</h1>
      <p className="exp-cong">
        All spanish verbs end in either 'ar', 'er', or 'ir'. Becuase of this, we only need to learn how these ending change when
        we are talking about diffent people. Note, we dont have to put the person in front of the word in spanish. It is optional
        because we can tell who we are talking about by the conjugation.
      </p>

      <p>There are two kinds of conjugations in spanish. Simple and perfect. Simple conjugations conjugate the word
        in place and perfect uses an extra conjugated verb.

        Here are some examples:
        Simple - I run.
        Perfect - I had run.
      </p>


        {props.conj.data.map((data, i) => {
          return (
            <div key={i}>
              <h2 className="cong-title">{data.conj_type}</h2>
              <h3>{data.ending}</h3>
              <h4>{data.word}</h4>
              <table className="congugation-table">
                <tr>
                  <td>Who</td>
                  <td>congugation</td>
                  <td>conjugated</td>
                  <td>example sentence</td>
                </tr>
                <tr>
                  <td>Yo - I</td>
                  <td>{data.yo}</td>
                  <td>{data.yo_def}</td>
                  <td>{data.yo_ex}</td>
                </tr>
                <tr>
                  <td>Tu - You</td>
                  <td>{data.tu}</td>
                  <td>{data.tu_def}</td>
                  <td>{data.tu_ex}</td>
                </tr>
                <tr>
                  <td>El/Ella - He/She</td>
                  <td>{data.el}</td>
                  <td>{data.el_def}</td>
                  <td>{data.el_ex}</td>
                </tr>
                <tr>
                  <td>Nosotros - We</td>
                  <td>{data.nos}</td>
                  <td>{data.nos_def}</td>
                  <td>{data.nos_ex}</td>
                </tr>
                <tr>
                  <td>Ellos/Ellas - They</td>
                  <td>{data.ellos}</td>
                  <td>{data.ellos_def}</td>
                  <td>{data.ellos_ex}</td>
                </tr>
              </table>
            </div>
          )
          })
        }
    </div>
  )
}

export default Conjugations;
