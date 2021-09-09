import React from 'react'
import reactDom from 'react-dom'
import './index.css'

// components
import CounterApp from './components/CounterApp/CounterApp'

const rootDiv = document.querySelector('#root')

reactDom.render(
  <CounterApp value={10} />, 
  rootDiv
)