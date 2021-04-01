import React from "react";
import react from "react";

class NameSeach extends React.Component {
    readName(event){
        event.preventDefault();

        // Selecting the id of 'name' from the form
        let element = document.querySelector("#name");

        // fetching infomation from the 'employees' adress
        fetch("/employees/" + element.value)

        // The responce is parse into json data
        .then((res) => {
            return res.json();

        // Looking at our processed data
        })
        .then((processed) => {

            // 'reporting' is selecting the id of 'reportingArea' from the form bellow
            let reporting = document.querySelector("#reportingArea");

             // if an error is pressent, then the reponce will contain error feedback
            if(processed.error) {
                reporting.innerHTML = processed.error;

            // otherwise we are posting the match value pair for the data given
            } else {
                reporting.innerHTML = processed.age;
            }
        });
        element.value= "";
    }

    render() {
        return(
            <div>
                <h2>Name</h2>
                <form onSubmit={this.readName}>
                <input id="name" type="text"/>
                <button>Submit</button>
                </form>
            </div>
            
        )
    }
}

export default NameSeach;