import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Geocode from 'react-geocode';
import Nav from './Traveler/Nav'


const mapStyles = {
  width : '100%',
  height: '80%'
};

export class Traveler extends Component {

  constructor(props){
    super(props)
    this.state ={
      targetLocation : { lat: -1.2884, lgn: 36.8233}
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
                    targetLocation : {lat, lng}
                  });
                })  
      } else {
        console.log('Place Not Found')
      }
    }
    
  }

  render(){
    Geocode.setApiKey("YOUR_MAP_API_KEY");
    return (
      <div>
      <br/>
        <Nav handleClickEvent={this.onClickHandler.bind(this)} />
        <Map google={this.props.google} zoom={15} style={mapStyles} center={this.state.targetLocation}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey : 'YOUR_MAP_API_KEY'
})(Traveler);