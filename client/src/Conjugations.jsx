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


        {props.conj.data.map((data) => {
          return (
            <div>test</div>
          )

          })
        }




      <h1>Indicative - Used to talk about reality & facts. Describes actions.</h1>

      <h1>Simple</h1>

        <h2 className="cong-title">Simple Present</h2>
        <p className="cong-exp">This is what we use when we are talking about things that are happening right now</p>

          <h3>AR</h3>
          <h4>Hablar - To speak</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>o</td>
              <td>Yo hablo - I speak</td>
              <td>Yo hablo contigo - I speak with you</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>as</td>
              <td>Tu hablas - You speak</td>
              <td>Tu hablas cada dia - You speak each day</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>a</td>
              <td>El habla - he speaks</td>
              <td>El habla bueno - he speaks well</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>amos</td>
              <td>Nosotros hablamos - We speak</td>
              <td>Nosotros hablamos a veces - we speak sometimes</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>an</td>
              <td>Ellos hablan - they speak</td>
              <td>Ellos hablan mucho - they speak a lot</td>
            </tr>
          </table>

          <h3>ER</h3>
          <h4>Comer - To eat</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>o</td>
              <td>Yo como - I eat</td>
              <td>Yo como a casa - I eat at home</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>es</td>
              <td>Tu comes - You eat</td>
              <td>Tu comes eso? - You eat that?</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>e</td>
              <td>Ella come - She eats</td>
              <td>Ella come conmigo - She eats with me</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>emos</td>
              <td>Nosotros comemos - We eat</td>
              <td>comemos mucho aqui - we eat a lot here </td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>en</td>
              <td>Ellos comen - they eat</td>
              <td>Ellos nunca comen - they never eat</td>
            </tr>
          </table>

          <h3>IR</h3>
          <h4>Vivir - To live</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>o</td>
              <td>Yo vivo - I live</td>
              <td>Vivo aqui - I live here</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>es</td>
              <td>Tu vives - You live</td>
              <td>vives bueno - You live well</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>e</td>
              <td>Ella vive - She lives</td>
              <td>Ella vive con su hermano - She lives with her brother</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>imos</td>
              <td>Nosotros vivimos - We live</td>
              <td>vivimos en este pueblo - we live in this village</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>en</td>
              <td>Ellos viven - they live</td>
              <td>Ellas viven en los Estados Unidos - they live in the United States</td>
            </tr>
          </table>

        <h2 className="cong-title">Imperfect Past</h2>
        <p className="cong-exp">Used to talk about past actions or emotional states in the past that were not completed</p>

          <h3>AR</h3>
          <h4>Comprar - To buy</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>aba</td>
              <td>Yo compraba - I bought, I was buying, I used to buy</td>
              <td>Yo compraba muchas cosas - I bought many things</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>abas</td>
              <td>Tu comprabas - You bought, you were buying, you used to buy</td>
              <td>Comprabas carne - You bought meat</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>aba</td>
              <td>El compraba - He bought</td>
              <td>El compraba pescado aqui - he bought fish here</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>abamos</td>
              <td>Nosotros comprabamos - We bought</td>
              <td>comprábamos comida para cena - we bought food for dinner</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>aban</td>
              <td>Ellos compraban - they bought</td>
              <td>Ellos compraban huevos - they bought eggs</td>
            </tr>
          </table>

          <h3>ER</h3>
          <h4>Correr - To run</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>ía</td>
              <td>Yo corría - I ran</td>
              <td>Yo corría cada dia - I ran each day</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>ías</td>
              <td>Tu corrías - You ran</td>
              <td>Tu corrías con su perro - You ran with your dog </td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>ía</td>
              <td>Ella corría - She ran</td>
              <td>Ella corría conmigo - She ran with me</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>íamos</td>
              <td>Nosotros corriamos - We ran</td>
              <td>corriamos cada semana - We ran each week</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>ísan</td>
              <td>Ellos corrian - they ran</td>
              <td>Ellos nunca corrian en escuela - They never ran in school</td>
            </tr>
          </table>

          <h3>IR</h3>
          <h4>Escribir - To write</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>ía</td>
              <td>Yo escribía - I wrote</td>
              <td>Yo escribía a ella - I wrote to her</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>ías</td>
              <td>Tu escribía - You wrote</td>
              <td>escribía un libro - You wrote a book</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>ía</td>
              <td>El escribía - He wrote</td>
              <td>El escribía cartas- He wrote letters</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>íamos</td>
              <td>Nosotros escribíamos - We wrote</td>
              <td>Nosotros escribíamos en escuela - We wrote in school</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>ían</td>
              <td>Ellos escribían - They wrote</td>
              <td>Ellos escribían contigo - They wrote with you</td>
            </tr>
          </table>

        <h2 className="cong-title">Preterite</h2>
        <p className="cong-exp">Used to talk about past actions that were completed</p>

          <h3>AR</h3>
          <h4>Comprar - To buy</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>aba</td>
              <td>Yo compraba - I bought, I was buying, I used to buy</td>
              <td>Yo compraba muchas cosas - I bought many things</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>abas</td>
              <td>Tu comprabas - You bought, you were buying, you used to buy</td>
              <td>Comprabas carne - You bought meat</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>aba</td>
              <td>El compraba - He bought</td>
              <td>El compraba pescado aqui - he bought fish here</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>abamos</td>
              <td>Nosotros comprabamos - We bought</td>
              <td>comprábamos comida para cena - we bought food for dinner</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>aban</td>
              <td>Ellos compraban - they bought</td>
              <td>Ellos compraban huevos - they bought eggs</td>
            </tr>
          </table>

          <h3>ER</h3>
          <h4>Correr - To run</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>ía</td>
              <td>Yo corría - I ran</td>
              <td>Yo corría cada dia - I ran each day</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>ías</td>
              <td>Tu corrías - You ran</td>
              <td>Tu corrías con su perro - You ran with your dog </td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>ía</td>
              <td>Ella corría - She ran</td>
              <td>Ella corría conmigo - She ran with me</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>íamos</td>
              <td>Nosotros corriamos - We ran</td>
              <td>corriamos cada semana - We ran each week</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>ísan</td>
              <td>Ellos corrian - they ran</td>
              <td>Ellos nunca corrian en escuela - They never ran in school</td>
            </tr>
          </table>

          <h3>IR</h3>
          <h4>Escribir - To write</h4>
          <table className="congugation-table">
            <tr>
              <td>Who</td>
              <td>congugation</td>
              <td>conjugated</td>
              <td>example sentence</td>
            </tr>
            <tr>
              <td>Yo - I</td>
              <td>ía</td>
              <td>Yo escribía - I wrote</td>
              <td>Yo escribía a ella - I wrote to her</td>
            </tr>
            <tr>
              <td>Tu - You</td>
              <td>ías</td>
              <td>Tu escribía - You wrote</td>
              <td>escribía un libro - You wrote a book</td>
            </tr>
            <tr>
              <td>El/Ella - He/She</td>
              <td>ía</td>
              <td>El escribía - He wrote</td>
              <td>El escribía cartas- He wrote letters</td>
            </tr>
            <tr>
              <td>Nosotros - We</td>
              <td>íamos</td>
              <td>Nosotros escribíamos - We wrote</td>
              <td>Nosotros escribíamos en escuela - We wrote in school</td>
            </tr>
            <tr>
              <td>Ellos/Ellas - They</td>
              <td>ían</td>
              <td>Ellos escribían - They wrote</td>
              <td>Ellos escribían contigo - They wrote with you</td>
            </tr>
          </table>

    </div>
  )
}

export default Conjugations;
