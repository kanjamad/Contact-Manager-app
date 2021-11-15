import React from "react";
import ContactCard from "../contactCard/ContactCard";
import "./contactList.css";

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderData = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHander={deleteConactHandler}
      />
    );
  });
  return <div>{renderData}</div>;
};

export default ContactList;
