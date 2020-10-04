import React from 'react'

import L from 'leaflet'

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
// import {
//   latLngBounds,
//   Map as LeafletMap,
//   TileLayer,
//   Marker,
//   Popup
//   // type CRS,
//   // type Renderer,
// } from 'leaflet'

import { Map, Marker, TileLayer, Popup } from 'react-leaflet'

// import Map from '../map/Map'
import { TopNav } from '../navigation/TopNav'
import { Footer } from '../navigation/Footer'

import '../../styles/crawl.less'

const locationOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000};

class Crawl extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      hasLocation: false,
      latlng: {
        lat: 51.505,
        lng: -0.09,
      },
    }
    // let mapRef = React.createRef(Map)
    
  }
  
  getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords)
        this.setState({
          hasLocation: true,
          latlng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      },null, locationOptions);
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  handleClick = () => {
    console.log("hello")
  }

  handleLocationFound = (e) => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {

    if (!this.state.hasLocation) { 
      this.getCurrentLocation()
    }

    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null

    

    // const map = this.mapRef.current
    // if (map != null) {
    //   map.leafletElement.locate()
    // }

    return(
      <>
        <TopNav />
        <section className="py-6 px-6">
          <Map 
            center={this.state.latlng} 
            zoom={12}
            length={4}
            onClick={this.handleClick}
            // onLocationfound={this.handleLocationFound}
            // ref={this.mapRef}
            >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            { marker }
          </Map>
        </section>
        <section>
          <button className="btn"
            onClick={this.getCurrentLocation}>Get Location</button>
        </section>
        <Footer />
      </>
    )
  }
}

export default Crawl
