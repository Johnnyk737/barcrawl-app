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
        <section className="py-6 px-6">
          {/* TODO: we'll put a big picture of a bar in the background */}
          <Container>
            <Row>
              <div>
                <img className='welcome-page-image' src={barImg} />
              </div>
            <span>Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/bar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
              { null || null}
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    )
  }
}

export default Main
