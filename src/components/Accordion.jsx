import React, { useState } from "react";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import "./accordion.css";
const Accordion = ({ heading, p }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion" onClick={() => setOpen(!open)}>
      <div className="accordion-header">
        <h2>{heading}</h2>
        <button onClick={() => setOpen(!open)}>
          <img src={open ? minusIcon : plusIcon} alt="icon" />
        </button>
      </div>
      {open && (
        <p style={open ? { display: "block" } : { display: "none" }}>{p}</p>
      )}
    </div>
  );
};

export default Accordion;
