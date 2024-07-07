import React from 'react'
import './App.css'
import Hello from './Hello'
import ReactInspector from './ReactInspector'

function App() {
  return (
    <div className="App">
      <React.Fragment>

        <header className="App-header">
          <p>vite-plugin-react-inspector</p>
          <p>vite-plugin-react-inspector</p>
          <p>vite-plugin-react-inspector</p>
          <ReactInspector/>
          <img
            style={{ width: '150px' }}
            src={''}
          />
          <p>vite-plugin-react-inspector</p>
          <p>
            GitHub 👉 sudongyuer 🐟
          </p>
          <Hello/>
          <Hello/>
          <Hello/>
          <ReactInspector/>

          <ReactInspector/>
          <ReactInspector/>
          <ReactInspector/>
          <ReactInspector/>

        </header>
      </React.Fragment>
    </div>
  )
}

export default App
