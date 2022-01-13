import React from "react";

function ContactCard(props) {
  return (
    <div>
      <h3> {props.name} </h3>
      <h3> {props.lastName} </h3>
      <p> {props.email}</p>
    </div>
  );
}

export default ContactCard;
