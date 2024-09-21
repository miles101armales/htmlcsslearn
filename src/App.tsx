import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Обычный параграф */}
      <p>Lorem ipsum dolor sit amet.</p>
      {/* Обычный параграф с явным переносом */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime, iusto.</p>
      {/* Обычный параграф со специальным симоволом неразрывного пробела */}
      <p>Lorem,&nbsp;&nbsp;&nbsp;&nbsp; ipsum&nbsp;dolor.</p>
    </>
  )
}

export default App
