import React, { useState } from 'react';

const Select = (props) => {

  const [open, setOpen] = useState(false);
  // console.log(props)

  return (
    <div>
      <h3>Select Which Tense You Want To Study</h3>
      <select onChange={() => props.updateTense(event)} >
        <option value="All">All</option>
        <option value="Simple Present">Simple Present</option>
        <option value="Future">Future</option>
        <option value="Preterite">Pretertite</option>
        <option value="Imperfect Past">Imperfect Past</option>
        <option value="Conditional">Conditional</option>
        <option value="Present Perfect">Present Perfect</option>
        <option value="Conditional Perfect">Conditional Perfect</option>
        <option value="Future Perfect">Future Perfect</option>
      </select>
    </div>
  )
}

export default Select;