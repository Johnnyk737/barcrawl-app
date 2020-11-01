import React from 'react'

import { TopNav } from '../components/navigation/TopNav'
import { Footer } from '../components/navigation/Footer'
import Map from "../components/crawl/Map"

import '../../styles/crawl.less'

class Crawl extends React.Component {
  
  render() {
    return(
      <>
        <TopNav />
        <section className="py-6 px-6">
          <Map />
        </section>
        <Footer />
      </>
    )
  }
}

export default Crawl
