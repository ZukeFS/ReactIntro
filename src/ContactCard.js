import React from 'react';

function ContactCard(props){
    console.log(props) //We can check all the values props carries
    return (
        <div className="contact-card">
           <img src={props.contact.imgUrl} />
           <h3>{props.contact.name}</h3>
           <p>{props.contact.phone}</p>
           <p className="email">{props.contact.email}</p>
        </div>
    )
}

export default ContactCard