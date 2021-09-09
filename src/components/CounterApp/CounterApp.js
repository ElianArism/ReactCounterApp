import PropTypes from 'prop-types'
import {useState} from 'react'
import './CounterApp.css'

const CounterApp = ({value}) => {
  const [counter, setCounter] = useState( value ) 

  const add = (e) => {
    setCounter(counter + 1) // || setCounter( (counter) => counter + 1)
  }

  const substract = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(value)
  }

  return (
    <>
      <h1> Counter App </h1>
      <p>{ counter }</p> 
      
      <button onClick={ add }> Add </button>
      <button onClick={ substract }> Substract </button>
      <button onClick={ reset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp