import React from 'react'
import { createRoot } from 'react-dom/client'
import Select from './Select/select.jsx'

const divEle = document.createElement('div')
divEle.id = 'react-inspector-container'

document.body.appendChild(divEle)

const domContainer = document.querySelector('#react-inspector-container')

const root = createRoot(domContainer)
root.render(<Select/>)
