import React from "react";
import ContactCard from "../components/ContactCard";
import contactData from "../components/contactData";

function propsPractice() {
  const cardComponents = contactData.map((contact) => (
    <ContactCard
      key={contact.id}
      name={contact.name}
      lastName={contact.lastName}
      email={contact.email}
    />
  ));
  return <div style={{ textAlign: "center" }}>{cardComponents}</div>;
}

export default propsPractice;
