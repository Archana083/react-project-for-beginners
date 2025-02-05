import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && (<p>{info}</p>) }
    </div>
  )
}

export default Questions

