import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from 'react-geocode';
import Nav from './Traveler/Nav'


const mapStyles = {
      position: 'absolute',
      width: '100%',
      height: '65%'
  };

export class Traveler extends Component {

  constructor(props){
    super(props)
    this.state ={
      targetLocation : { lat: 1.2884, lgn: 36.8233},
      showingInfoWindow : false,
      searchString : null,
      activeMarker : null
    }  
  }
  

  onClickHandler(e){

    if( e.keyCode === 13 || e.keyCode === undefined ){
      const searchString = e.target.parentNode.querySelector('.form-control').value;

      if( !!searchString ){
        Geocode.fromAddress(searchString)
                .then(response => {
                  const {lat, lng } = response.results[0].geometry.location;
                  this.setState({
                    targetLocation : {lat, lng},
                    searchString : searchString
                  });
                })  
      } else {
        console.log('Place Not Found')
      }
    }
  }

  onClickMarker(props,marker){
    console.log(marker)
    this.setState({
      showingInfoWindow : true,
      activeMarker : marker
    })
  }

  onClickedMarker(){
    this.setState({
      showingInfoWindow : false,
      activeMarker : null
    })
  }

  render(){
    Geocode.setApiKey("MAP_API_KEY");
    return (
      <div>
        <Nav handleClickEvent={this.onClickHandler.bind(this)} />
        <Map google={this.props.google} zoom={15} style={mapStyles} center={this.state.targetLocation} onClick={this.onClickedMarker.bind(this)} >
          <Marker position={this.state.targetLocation} onClick={this.onClickMarker.bind(this)}/>
          <InfoWindow position={this.state.targetLocation} visible={this.state.showingInfoWindow}>
            <h1>{this.state.searchString}</h1> 
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey : 'MAP_API_KEY'
})(Traveler);