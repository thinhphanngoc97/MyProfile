import React, { Component } from "react";
import '../assets/css/Contact.css';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from_name: '',
            from_email: '',
            message: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
    }

    async handleChangeName(event) {
        await this.setState({
            from_name: event.target.value
        });
    }

    async handleChangeEmail(event) {
        await this.setState({
            from_email: event.target.value
        });
    }

    async handleChangeMessage(event) {
        await this.setState({
            message: event.target.value
        });
    }

    sendEmail = (e) => {
        e.preventDefault();

        var template_params = {
            from_name: this.state.from_name,
            from_email: this.state.from_email,
            message: this.state.message
        }

        emailjs.send('gmail','contact_email_template', template_params, 'user_izwB33Ch5oATj5ge3pIJh')
        .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
            alert("Thanks for contacting me. I will respond as soon as possible.");
        }, (err) => {
            // console.log('FAILED...', err);
            alert("Something wrong! Please check again.");
        });

        var frm = document.getElementsByName('contact-form')[0];
        frm.reset(); 
        return false;
    }

    render() {
        return (
            <div id="contact">       
                <div className="container">
                    <h2 className="title">
                        Contact
                        <span> Me</span>    
                    </h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <form name="contact-form" className="row form-group" onSubmit={this.sendEmail}>
                                <div className="my-2 col-md-6 col-sm-12">
                                    <label>Full Name</label>
                                    <input 
                                        required 
                                        className="form-control" 
                                        type="text" 
                                        name="name"
                                        onChange={this.handleChangeName}
                                    />
                                </div>
                                <div className="my-2 col-md-6 col-sm-12">
                                    <label>Email</label>
                                    <input 
                                        required 
                                        className="form-control" 
                                        type="email" 
                                        name="email"
                                        onChange={this.handleChangeEmail}
                                    />
                                </div>
                                <div className="my-2 col-12">
                                    <label>Message</label>
                                    <textarea 
                                        required 
                                        className="form-control message-input" 
                                        onChange={this.handleChangeMessage}
                                    />
                                </div>
                                <div className="my-2 col-12">
                                    <input className="send-btn" type="submit" value="SEND MESSAGE" />
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <div className="contact-item">
                                    <i className="fa fa-map-marker"></i>
                                    <h5>Address / Street</h5>
                                    <p>Street 3, Ward 9, Go Vap District, Ho Chi Minh City</p>
                                </div>
                                <br/>
                                <div className="contact-item">
                                    <i className="fa fa-phone"></i>
                                    <h5>Phone number</h5>
                                    <p>(+84) 98 869 03 45</p>
                                </div>
                                <br/>
                                <div className="contact-item">
                                    <i className="fa fa-globe"></i>
                                    <h5>Website Address</h5>
                                    <p>thinhphan-profile.web.app</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;