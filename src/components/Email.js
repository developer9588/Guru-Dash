import React from "react";
import { useState } from "react";
import SideMenu from "./Pages/SideMenu/SideMenu";
import OnceHeader from "./Pages/OncePages/OnceHeader";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


const Email = () =>{

    const [inactive,setInactive] = useState(false);



    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const [result, setResult] = useState(null);
    
      const sendEmail = event => {
        event.preventDefault();
        axios
          .post('/send', { ...state })
          .then(response => {
            setResult(response.data);
            setState({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          })
          .catch(() => {
            setResult({
              success: false,
              message: 'Something went wrong. Try again later'
            });
          });
      };
    
      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };

    return(

        <div className={`con ${inactive ? 'con-act' : ""}`}>
                    
        <SideMenu 
           onCollapse={(inactive)=>{
               console.log(inactive);
               setInactive(inactive)
           }}
       />

       <OnceHeader heading="Directory & Staff Mailer" />
       <div className="staff-mailer-content">
             <div className="inner-container">
             <div>
             {result && (
<p className={`${result.success ? 'success' : 'error'}`}>
{result.message}
</p>
)}
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
             </div>
       </div>
   </div>
    )
}

export default Email;