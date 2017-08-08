import React, { Component } from 'react';



class Location extends Component {
    render(){
        return(
            <div className="location">
            <p>{this.props.name}</p>
            <p>Address:</p>
            <p>{this.props.address}</p>
            <p>Phone</p>
            <p>{this.props.phone}</p>
            </div>
        )
    }
}
export default Location;