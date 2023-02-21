import React, { useState } from 'react';
import './accordion.css';
import { questions } from './api';
import MyAccordion from './MyAccordion';

function Accordion() {
    const [data, setData] = useState(questions);
  return (
    <>
        {/* <h1> Muskan </h1> */}
        <section className='main-div'>
        <h1> React Interview </h1>
        {
            data.map((curVal) => {
                const { id } = curVal;
                return <MyAccordion key={id} {...curVal} />
            })
        }
        </section>
    </>
  )
}

export default Accordion