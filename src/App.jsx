import { useState } from 'react'
import './App.css'
import Child from './Components/Child'

function App() {
  const [count, setCount] = useState(0)

  const changeValue = () => {
    setCount(count + 1)
  }


  return (
    <>
      <h1>Hi! I am App : {count}</h1>
      <button onClick={changeValue} className='btn btn-primary'>Increment</button>
      <Child />
    </>
  )
}

export default App
