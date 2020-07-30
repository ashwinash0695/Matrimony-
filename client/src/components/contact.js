import React, { Component } from 'react'

export default class contactus extends Component {
    render() {
        return (
            <div className="contactForm">
                <h4>Contact Us</h4>
                <img style={{ height:"200px",marginLeft:"auto",marginRight:"auto",display:"block",marginTop:"30px"}}src={require('../components/contact.svg')} />

                <div className="formContainer">
                            <h3>Contact Us</h3>
                            <input type="text" placeholder="Name" /><br />
                            <input style={{height:"100px"}}type="text" placeholder="Message" /><br />
                            {/* <span><input style={{marginLeft:"20px"}} type="checkbox" /><span>Terms & condition</span></span> */}
                            <button>Submit</button>
                        </div>
            </div>
        )
    }
}
