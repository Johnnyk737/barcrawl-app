import React from 'react';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

import '../../styles/topnav.less'

class TopNav extends React.Component {

  constructor(props) {
    super(props)
  }

  showSearch(show) {
    if (show) {
      return (
        <div className="form-inline my-2 my-lg-0 ml-auto">
            {/* TODO: at smaller widths, turn this into a search icon (magnifying glass) */}
            {/* <div className="search-bar form-control mr-sm-2"> */}
                <input type="search" 
                  className="search-bar form-control mr-sm-2" 
                  onChange={event=>this.handleChange(event)}
                  placeholder="Search Drinks" />
              {/* </div> */}
          </div>
      )
    }
  }

  render() {
    return (
      <div className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container-fluid">
          {/* TODO: at smaller widths, turn this into a hamburger icon */}
          <div id="image-text" className="navbar-brand header-title">
            {/* TODO: Keep center at smaller widths */}
            <div id="title">
              BarCrawler
              {/* <Link className='nav-link' to='/'>Dranks</Link> */}
            </div>
          </div>
          <Nav className="navbar-nav my-2 my-lg-2 mr-auto">
            <Nav.Item>
              <Link className="nav-link" to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to='/crawl'>Plan the crawl</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to='/'>link 3</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className='nav-link' to='/'>About</Link>
            </Nav.Item>
          </Nav>
          {this.showSearch(false)}
        </div>
      </div>
    )
  }
}

export default TopNav