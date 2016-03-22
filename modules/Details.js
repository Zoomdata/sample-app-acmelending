// modules/Details.js
import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/detail/${userName}/${repo}`
    console.log(path)
    browserHistory.push(path)
  },

  render() {
    return (
      <div>
        <h2>Detail</h2>

        {/* add some links */}
        <ul>
          <li><NavLink to="/detail/rackt/react-router">React Router</NavLink></li>
          <li><NavLink to="/detail/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>

        {this.props.children}

      </div>
    )
  }
})