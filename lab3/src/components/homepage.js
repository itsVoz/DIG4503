// Importing necessary packages for lab from React
import React from 'react';

// Creating the componet
// Class homepage is extending the attributes of React.Component
class HomePage extends React.Component {

    // Rendering to browser
    render(fname) {
        return <h1>Hello, {this.props.firstName}</h1>;
    }
}

// Exporting only Homepage
export default HomePage;