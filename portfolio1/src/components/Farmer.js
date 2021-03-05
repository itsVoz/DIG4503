// Importing Required components
import React, { Component } from 'react';
import FarmerImage from '../Farmer.jpg'

// Creating a new class component Farmer
class Farmer extends Component {
    constructor(props){
        super(props);
        this.greetingFarmer = this.greetingFarmer.bind(this);
    }

    // Addition of values to greetingFarmer
    greetingFarmer(){
        alert('Hello User! my name is Frank, The Farmer! Thank you for coming to my Market.');
    }

    // Redenering what has been stated above
    // Returning the following values
    // On button click the greetingFarmer method is run
    /* RELATED TO THE ASSIGNMENT
    * I tried to display an image above the button for the farmer to have a face
    * Intially no image was displaying at all even with additional CSS
    * Even with inline styling, only a border of what is supposed to be the picture is still there
    * I set FarmerImage to reference Farmer.jpg and called upon FarmerImage in an img tag bellow
    * Thank you for your help in advance
    */
    render(){
        return(
            <div>
                <img scr={FarmerImage} width="300" height="300" alt="image of the farmer"/>
                <div>
                    <button onClick={this.greetingFarmer}>
                        Talk to the Farmer
                    </button>   
                </div>
            </div>
        );
    }

        
   
}

// Exporting default values
export default Farmer;