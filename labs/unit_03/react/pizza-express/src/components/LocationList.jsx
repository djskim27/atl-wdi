import React, { Component } from 'react';
import Location from '../components/Location'
import locationData from '../locationData';

class LocationList extends Component {
    render() {
        return (

            <div id="locations">
                <h1>Locations:</h1>

                <div className="locations">


                    {locationData.map((locationDataPoint, i) => {
                        return <Location key={i} name={locationDataPoint.name} address={locationDataPoint.address} phone={locationDataPoint.phone} />
                    })}


                </div>
            </div>
        )
    }
}
export default LocationList;