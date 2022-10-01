import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact(){
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text)
            })
            .catch((error) => {
                console.log(error)
            })
        successNotify()    
        e.target.reset()
    }

    const successNotify = () => {
        toast.success('Message sent!', { position: toast.POSITION.TOP_RIGHT})
        
    }

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="contact-form" style={{padding: '10px'}}>
                <input type="text" placeholder="name" name="name" required />
                <input type="email" placeholder="email" name="email" required/>
                <textarea rows="5" placeholder="type your message here" name="message"required />
                <button className="submit">submit</button>
             </form>
        </div>
    )
}

export default Contact