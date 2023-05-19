import { useState } from 'react'
import './index.scss'

function App() {
  const [result, setResult] = useState('');
  const handleClick = e => setResult(result.concat(e.target.id));
  const clear = () => setResult('');
  const deleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  return (
    <div className='calculator'>
      <input type="text" value={result} disabled />

      <div className='buttons'>
        <button className='buttons__operator' onClick={clear}>AC</button>
        <button className='buttons__operator' onClick={deleteEl}>DE</button>

        <button id='.' className='buttons__operator' onClick={handleClick}>.</button>
        <button id='/' className='buttons__operator' onClick={handleClick}>/</button>

        <button id='7' className='buttons__number' onClick={handleClick}>7</button>
        <button id='8' className='buttons__number' onClick={handleClick}>8</button>
        <button id='9' className='buttons__number' onClick={handleClick}>9</button>

        <button id='*' className='buttons__operator' onClick={handleClick}>x</button>

        <button id='4' className='buttons__number' onClick={handleClick}>4</button>
        <button id='5' className='buttons__number' onClick={handleClick}>5</button>
        <button id='6' className='buttons__number' onClick={handleClick}>6</button>

        <button id='-' className='buttons__operator' onClick={handleClick}>-</button>

        <button id='1' className='buttons__number' onClick={handleClick}>1</button>
        <button id='2' className='buttons__number' onClick={handleClick}>2</button>
        <button id='3' className='buttons__number' onClick={handleClick}>3</button>

        <button id='+' className='buttons__operator' onClick={handleClick}>+</button>

        <button id='00' className='buttons__number' onClick={handleClick}>00</button>
        <button id='0' className='buttons__number' onClick={handleClick}>0</button>

        <button id='=' className='buttons__operator calculate' onClick={calculate}>=</button>
      </div>
    </div>
  )
}

export default App
