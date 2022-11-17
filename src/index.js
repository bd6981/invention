import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App/App.js"
import Modal from "./Components/Modal.js"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)