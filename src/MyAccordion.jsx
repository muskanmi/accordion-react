import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function MyAccordion({question, answer}) {
    const [val, setVal] = useState(false);

  return (
    <>
        <div className='main-heading'>
            <p onClick={() => setVal(!val)}> {val? <RemoveIcon /> : <AddIcon />} </p>
            <h3>{question}</h3>
        </div>
        {
            val && <p className='answers'> {answer} </p>
        }
    </>
  )
}

export default MyAccordion;