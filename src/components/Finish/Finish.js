import React,  { Component } from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

/*
Loantype
    Home purchase
    Refinance
    HELOC
Propertytype
    Single family
    townhome
    condo
    multi-family dwelling
    mobile home
City
Useclassification
    Primary
    Rental
    Secondary
Found?
Real Estate agent?
Estimated purchase price.
Down
Credit score
    Excellent
    Good
    Fair
    Poor
Bankruptcy/foreclosure
    No
    bankruptcy
    foreclosure
    both
Address
Name-email.
*/

class Finish extends Component {

    render(){
        let message = ""
        console.log(this.props)
        if(this.props.credit === "Fair" || this.props.credit === "Poor" || this.props.history !== "Has never been in bankruptcy"){
            message = "We're sorry, but due to your answers we are unable to provide the services you require at this time."
            if(this.props.history === "Has had both a foreclosure and a bankruptcy")
                message += " If you would like financial counselling please contact us at financialconsulting@homeloanwizard.net."
        }
        else{
            message += "Expect to hear from "
            if(this.props.loanType === "Purchase"){
                if(this.props.propToBeUsedOn === "Primary Home")
                    message += "Steve "
                else
                    message += "Jan "
            }
            else
                message += "our corporate lending offices "
            message += "shortly at " + this.props.email + "."
            if(this.props.cost - this.props.downPayment <=0)
                message += " We are looping in Stella for this cash purchase to expedite the process for you!"
            if(this.props.downPayment > 250000)
                message += " Melissa from our wealth management team is also available at melissa@homeloanwizard.net to assist you in any way necessary."
        }
        console.log(message)
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p name="promptText">Thank you for choosing Home Loan Wizard.</p> <br />
                    <p>{message}</p> <br />
                
                    <Link to="/"><button className="margin-btn"> Home </button></Link>
                </div>
            </div>
        )
    }
}


function mapStateToProps( state ) {

    return{ 
        loanType: state.loanType,
        propertyType: state.propertyType,
        city: state.city,
        propToBeUsedOn: state.propToBeUsedOn,
        found: state.found,
        realEstateAgent: state.realEstateAgent,
        cost: state.cost,
        downPayment: state.downPayment,
        credit: state.credit,
        history: state.history,
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        addressThree: state.addressThree,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email
    };
    
}
export default connect(mapStateToProps)(Finish);