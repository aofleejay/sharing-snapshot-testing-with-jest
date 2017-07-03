import React, { Component } from 'react'
import Link from './Link'

class App extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React Snapshot Testing With Jest
            </h1>
            <h2 className="subtitle">
              Kunapot Pairat
            </h2>
            <Link />
          </div>
        </div>
      </section>
    )
  }
}

export default App
