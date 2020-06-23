import React from 'react';
import './ContactForm.css'


const ContactForm = () => {
 
        return (
         
            <div id="contact-wrapper">
                <div className="contact-container">
        <div className="contact-form-data">
            <form name="contactform" method="POST" data-netlify="true">
                <div className="logo">
                    <img src="img/logo.png" alt="" />
                </div>
                <input type="text" name="name" placeholder="Enter first and last name" required/>
                <input type="text" name="email" placeholder="Username or email" required />
                <textarea className= "textarea" type="text" name="message" placeholder="Leave us a message :)" required/>
                            <button className="contact-form-btn" type="submit">Submit</button>
                            <div data-netlify-recaptcha="true"></div>
               
            
           
                        </form>
                       
    </div>
            </div>
           
            </div>
                
          
        )
    }

export default ContactForm