import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';

// constants
import constants from '../../constants';
import '../../styles/topnav.less'

export const TopNav = ({showSearch, onClick}) => {

  const displaySearch = (show) => {
    if (show) {
      return (
        <div className="form-inline my-2 my-lg-0 ml-auto">
            {/* TODO: at smaller widths, turn this into a search icon (magnifying glass) */}
            {/* <div className="search-bar form-control mr-sm-2"> */}
                <input type="search" 
                  className="search-bar form-control mr-sm-2" 
                  // onChange={event=>this.handleChange(event)}
                  placeholder="Search Drinks" />
              {/* </div> */}
          </div>
      )
    }
  }

  return (
    <Navbar expand='lg' className="fixed-top shadow ">
      <div id="image-text" className="navbar-brand header-title">
        {/* TODO: Keep center at smaller widths */}
        <Navbar.Brand id="title">
          {constants.title}
          {/* <Link className='nav-link' to='/'>Dranks</Link> */}
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav my-2 my-lg-2 mr-auto">
          <Nav.Item>
            <Link className="nav-link" to='/'>{constants.nav.home}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link' to='/crawl'>{constants.nav.crawl}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to='/'>{constants.nav.link3}</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link' to='/'>{constants.nav.about}</Link>
          </Nav.Item>
        </Nav>
        {displaySearch(showSearch)}
      </Navbar.Collapse>
    </Navbar>
  )
}

TopNav.propTypes = {
  showSearch: PropTypes.bool,
  onClick: PropTypes.func,
};

TopNav.defaultProps = {
  showSearch: false,
  onClick: undefined,
};
