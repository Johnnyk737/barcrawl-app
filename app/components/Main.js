import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { TopNav } from './navigation/TopNav'
import { Footer } from './navigation/Footer'

import '../styles/main.less'
import barImg from '../assets/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'

class Main extends React.Component {

  render() {
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
                Plan a customized bar crawl!
              </div>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}

export default Main
