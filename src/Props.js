import React from 'react'
import ContactCard from './ContactCard'
import './styles.css'

function Props(){
    return (
       <div className="contacts">
            <ContactCard 
            //We can hardcode and set the properties like below:
            //    name = "Mr. Zuke FS"
            //    imgUrl = "http://placekitten.com/300/200"
            //    phone = "9401062992"
            //    email = "cosicgaphy@gmail.com"

                               //OR

            //We can declare a prop object and set all the properties inside it                   
               contact = {
                   {
                       name : "Mr. Zuke FS",
                       imgUrl : "http://placekitten.com/300/200",
                       phone : "9401062992",
                       email : "cosicgaphy@gmail.com"
                   }
               }
            />

            <ContactCard 
            //    name = "Mr. SuicidalMidas"
            //    imgUrl = "http://placekitten.com/400/200"
            //    phone = "9489456213"
            //    email = "goobinoobie@gmail.com"
                contact = {
                {
                    name : "Mr. SuicidalMidas",
                    imgUrl : "http://placekitten.com/400/200",
                    phone : "9489456213",
                    email : "goobinoobie@gmail.com"
                }
            }
            />

            <ContactCard 
            //    name = "Mr. Maxwell"
            //    imgUrl = "http://placekitten.com/400/300"
            //    phone = "9478946123"
            //    email = "maxwell@gmail.com"
               contact = {
                {
                    name : "Mr. Maxwell",
                    imgUrl : "http://placekitten.com/400/300",
                    phone : "9478946123",
                    email : "maxwell@gmail.com"
                }
            }
            />

            <ContactCard 
            //    name = "Mr. Zeuss"
            //    imgUrl = "http://placekitten.com/200/100"
            //    phone = "9464589723"
            //    email = "zeussop@gmail.com"
               contact = {
                {
                    name : "Mr. Zeuss",
                    imgUrl : "http://placekitten.com/200/100",
                    phone : "9464589723",
                    email : "zeussop@gmail.com"
                }
            }
            />
       </div>
    )
}

export default Props