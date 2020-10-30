import React from 'react';
import { Link } from 'react-router-dom';

// constants
import constants from '../../constants';
import '../../styles/footer.less';

export const Footer = ()  => {
    return (
      <>
        <footer className="position-relative d-print-none">
          <div className="py-2 bg-gray-200">
            <div className="container">
              <div className="row">
                {/* We can make this better */}
                <div className="col-lg-2 col-md-3 mb-5 mb-lg-0">
                  <h6 className="font-weight-bold text-uppercase text-dark mb-3">
                    {constants.footer.directory}
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="nav-link" to="/">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/">
                      Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-3 mb-5 mb-lg-0">
                  <h6 className="font-weight-bold text-uppercase text-dark mb-3">
                    {constants.footer.links}
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="nav-link" to="/">
                        {constants.nav.home}
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/crawl">
                        {constants.nav.crawl}
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/">
                        {constants.nav.link3}
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/about">
                        {constants.nav.about}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 mb-5 mb-lg-0"></div>
              </div>
            </div>
          </div>
          <div className="py-4 font-weight-light bg-gray-800">
            <div className="container">
              <div className="row align-items-center">
                <div className="text-md-left text-center">
                  <div dangerouslySetInnerHTML={{__html: constants.footer.copyright}} />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
  }
