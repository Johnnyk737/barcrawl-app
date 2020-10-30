import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import PropTypes from 'prop-types';

import { TopNav } from './navigation/TopNav'
import { Footer } from './navigation/Footer'

import '../styles/main.less'
import barImg from '../assets/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'

export const Main = ({text}) => {


    return (
      <>
        <TopNav />
        <Container className="full-width position-relative overflow-hidden">
          <div>
            {/* would like this to scale the image to the screen by ratio */}
            <img id="welcome-page-image1" className='welcome-page-image' src={barImg} data-image-dimensions="4032x3024" data-image-ratio="0.75"/>
          </div>
        </Container>
        <section id="item-section-1" className="item-section-1">
          {/* This will go on top of the image */}
          <Container>
            <Row>
              <div className="text-color">
                {text}
              </div>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    )
  
}

Main.propTypes = {
  text: PropTypes.string,
};

Main.defaultProps = {
  text: "Default text",
};
