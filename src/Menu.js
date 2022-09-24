import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function Menu() {
  return (
    <div className="home">
      <div className="create box">
          <button className="btn-appeler" >
            <Link to="/app">Appel videos</Link>
          </button>
      </div>

      <div className="answer box">
          <button className="btn-repondre">
            <Link to="/home">Messages</Link>
          </button>
      </div>
    </div>
  )
}

export default Menu