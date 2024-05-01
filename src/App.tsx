import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState<Number[]>([])
  const [num2, setNum2] = useState<Number[]>([])
  const [operation, setOperation] = useState<String>('')
  const [result, setResult] = useState(0)
  
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')

  function addNumber(num: number): void {
    if(result){setResult(0)}
    if (operation != '') {
      let data = [...num2, num]
      setNum2(data)
      return
    }
    let data = [...num1, num]
    setNum1(data)
  }

  function delFunction(): void {
    if (operation != '') {
      if (num2.length > 0) {
        let data = [...num2]
        data.pop()
        setNum2(data)
        return
      }
      setOperation('')
      return
    }
    let data = [...num1]
    data.pop()
    setNum1(data)
  }

  function calculation(): void {

    let result: number

    switch (operation) {
      case '+':
        result = Number(num1.join('')) + Number(num2.join(''))
        setResult(result)

        setNum1([])
        setNum2([])
        setOperation('')
        break;
      case '-':
        result = Number(num1.join('')) - Number(num2.join(''))
        setResult(result)

        setNum1([])
        setNum2([])
        setOperation('')
        break;
      case '*':
        result = Number(num1.join('')) * Number(num2.join(''))
        setResult(result)

        setNum1([])
        setNum2([])
        setOperation('')
        break;
      case '/':
        result = Number(num1.join('')) / Number(num2.join(''))
        setResult(result)

        setNum1([])
        setNum2([])
        setOperation('')
        break;
      default:
        break;
    }

  }

  function resetApp(): void {
    setNum1([])
    setNum2([])
    setOperation('')
    setResult(0)
  }

  function chooseOperation (op:string):void {

    if(num1.length > 0){
      setOperation(op)
      return
    }

    if(result){
      setNum1([result])
      setResult(0)
      setOperation(op)
    }
  }

  return (
    <>
      <div className='card'>
        <div>
          <input type="text" readOnly value={result ? result : num1.join('') + operation + num2.join('')} />
        </div>
        <div>
          <button onClick={() => addNumber(7)}>7</button>
          <button onClick={() => addNumber(8)}>8</button>
          <button onClick={() => addNumber(9)}>9</button>
          <button onClick={() => chooseOperation('+')}>+</button>
          <button onClick={() => chooseOperation('/')}>/</button>
        </div>
        <div>
          <button onClick={() => addNumber(4)}>4</button>
          <button onClick={() => addNumber(5)}>5</button>
          <button onClick={() => addNumber(6)}>6</button>
          <button onClick={() => chooseOperation('-')}>-</button>
          <button onClick={resetApp}>C</button>
          <button onClick={() => addNumber(0)}>0</button>
        </div>
        <div>
          <button onClick={() => addNumber(1)}>1</button>
          <button onClick={() => addNumber(2)}>2</button>
          <button onClick={() => addNumber(3)}>3</button>
          <button onClick={() => chooseOperation('*')}>*</button>
          <button onClick={calculation}>=</button>
          <button onClick={delFunction}>DEL</button>
        </div>
      </div>
    </>
  )
}

export default App
