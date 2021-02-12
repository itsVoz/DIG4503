// Importing required packages
import React from 'react';

// Function MarketItem takes an argument of props
function MarketItem (props) {

    // Returns the values of MarketItem
    // Makes props.count a js object by use of '{}'
    return (
        <div>  
            <p>MarketItem: {props.count}</p>
        </div>
    )
}

// Export default values
export default MarketItem;