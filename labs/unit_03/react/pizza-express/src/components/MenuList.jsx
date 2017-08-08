import React, { Component } from 'react';
import MenuItem from '../components/MenuItem'
import pizzaData from '../pizzaData';

class MenuList extends Component {
    render(){
        return(
            <div id="menu" className="menu">
            <h1>Menu</h1>
            <div className="menu-container">
            {pizzaData.map((pizzaDataPoint, i) => {
                    return <MenuItem key={i} image={pizzaDataPoint.image} name={pizzaDataPoint.name} price={pizzaDataPoint.price} description={pizzaDataPoint.description}/>
                })}
            </div>
            </div>
        )
    }
}
export default MenuList;

   