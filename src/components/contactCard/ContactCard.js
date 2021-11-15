import React from "react";
import "./contactCard.css";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="list">
      <p>{name}</p>
      <p>{email}</p>
      <span>
        <i className="fas fa-trash" onClick={() => props.clickHander(id)}></i>
      </span>
    </div>
  );
};

export default ContactCard;
