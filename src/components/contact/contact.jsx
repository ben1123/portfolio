import React, {useRef, useState} from 'react';  
import './contact.scss';

export default function Contact() {
    const [messageSent, setMessageSent] = useState(false);
    const addressRef = useRef();
    const messageRef = useRef();

    const submitMessage = (event) => {
        event.preventDefault();
        /* TO DO */
        // some validation here
        // validation messages
        const message = messageRef.current.value;
        const address = addressRef.current.value;
        setMessageSent(true);
        console.log({
            message,
            address
        });
        
    }
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <form action="" className="contact-form" onSubmit={submitMessage}>
                <input
                ref = {addressRef}
                type="email" 
                placeholder="email@address.com"
                className="address" />
                <textarea
                ref={messageRef}
                type="text"
                rows="10"
                className="message" />
                <button className="submit-button">send</button>
                {messageSent && <p className="thank">Thank you for reaching us, We will reply you ASAP.</p>}
            </form>
            <div className="contact-banner">
                <img src="assets/images/send.png" alt="" />
            </div>

            
        </div>
    )
}
