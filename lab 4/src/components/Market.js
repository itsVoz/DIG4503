// Import the required packages
import React, {Component} from 'react';
import MarketItem from './MarketItem.js'

// Creats a class 'Market' with takes the attibutes of Component
class Market extends Component {
    
    // both constructor and super take in the argument props
    // super pushes data back to the component
    constructor(props) {
        super(props);

        // Now can reference this.state with the use of the constuctor
        // Setting the count prop to a value = 0
        // Else the value would be null
        this.state = {
            count: 0
        }
    }

// Processing the information above via render method
render () {

    // Returning these values to the browser
    // MarketItem now takes this.state.count as its count value
    // upon pressing the button displayed, the current setState count is updated to add 1 to its value
    return (
        <div>
            <MarketItem count={this.state.count}/>
            <button onClick={() => this.setState({count: this.state.count +1})}>Add a MarketItem</button>
        </div>
    )
}
}

// export defualt values
export default Market;