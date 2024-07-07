import React from 'react'
import reactDOM from 'react-dom'
import Select from './Select/select.jsx'

const divEle = document.createElement('div')
divEle.id = 'react-inspector-container'

document.body.appendChild(divEle)

const domContainer = document.querySelector('#react-inspector-container')

// react 18.x use reactDOM.render has console.error
const error = console.error
console.error = () => { }
// react version compatible
reactDOM.render(<Select />, domContainer)
console.error = error
