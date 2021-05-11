import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo={'Hola desde el index.js'} />, divRoot)
ReactDOM.render(<CounterApp value={16} />, divRoot)
// ReactDOM.render(<PrimeraApp saludo={'Hola soy Goku'} />, divRoot)

