import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';


const AnyReactComponent = ({ text }) => <div><FaMapMarkerAlt/><b>{text}</b></div>;

export default class GoogleMaps extends React.Component { 
    static defaultProps = {
        center: {
          lat: 13.4666,
          lng: 77.7398
        },
        zoom: 11
      };

    render() {
        return (
            <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAhHZ26kKMtAb79QKsfXX1M4I8O1leAurg' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={13.4666}
                lng={77.7398}
                text="Harobande"
              />
            </GoogleMapReact>
          </div>
        );
    }

}