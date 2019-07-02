import React from 'react'
import renderer from 'react-test-renderer'
import shallowRenderer from 'react-test-renderer/shallow'
import App from './App'

describe('Test app component', () => {
  it('shallow snapshot', () => {
    const renderer = new shallowRenderer()
    const snapshot = renderer.render(<App />)
    expect(snapshot).toMatchSnapshot()
  })

  it('full snapshot', () => {
    const html = renderer.create(<App />).toJSON()
    expect(html).toMatchSnapshot()
  })

  it('inline snapshot', () => {
    const renderer = new shallowRenderer()
    const snapshot = renderer.render(<App />)
    expect(snapshot).toMatchInlineSnapshot(`
      <section
        className="hero is-primary"
      >
        <div
          className="hero-body"
        >
          <div
            className="container"
          >
            <h1
              className="title"
            >
              React Snapshot Testing With Jest
            </h1>
            <h2
              className="subtitle"
            >
              Kunapot Pairat
            </h2>
            <Link />
          </div>
        </div>
      </section>
    `)
  })
})
