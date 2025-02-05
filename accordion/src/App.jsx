import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import SingleQuestion from "./Questions"
import questions from './data';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
        </main>
    </>
  )
}

export default App
