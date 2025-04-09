import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Text display="Hello"/>
      <Text display="What's up?"></Text>      
    </>
  )
}

function Text({display}) {
  return (
    <div>
        <p>{display}</p>
    </div>
  )
}

export default App
