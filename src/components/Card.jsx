import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import "./css/card.css";
import pricingData from "../Data";

function Card() {
  const [checked, setChecked] = useState(true);

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 56,
    height: 32,
    padding: 0,
    display: 'flex',
    '&:hover .MuiSwitch-thumb, &:hover .MuiSwitch-track': {
      opacity: 0.7,
    },
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 26,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(24px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 4,
      '&.Mui-checked': {
        transform: 'translateX(24px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          background: 'linear-gradient(to right, hsl(236, 72%, 79%) 0%, hsl(237, 67%, 72%) 45%, hsl(237, 63%, 64%) 100%)',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: 26,
      height: 26,
      boxShadow: 'none',
      background: '#fff',
    },
    '& .MuiSwitch-track': {
      borderRadius: 16,
      opacity: 1,
      cursor: 'pointer',
      background: 'linear-gradient(to right, hsl(236, 72%, 79%) 0%, hsl(237, 67%, 72%) 45%, hsl(237, 63%, 64%) 100%)',
      boxSizing: 'border-box',
    },
  }));

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <section className="card-container">
      <header className="header-container">
        <span className="subscription-name">Annually</span>
        <CustomSwitch checked={checked} onChange={handleChange} />
        <span className="subscription-name">Monthly</span>
      </header>
      <article className="card-wrapper">
        {pricingData.map((obj) => {
          let cardClass;
          if (obj.name === "Professional") {
            cardClass = "prof";
          } else if (obj.name === "Basic") {
            cardClass = "basic";
          } else {
            cardClass = "master";
          }

          return (
            <div key={obj.id} className={`card ${cardClass}`}>
              <p
                className={`name ${
                  obj.name === "Professional" ? "prof" : "basic-master"
                }`}
              >
                {obj.name}
              </p>
              <p
                className={`price ${
                  obj.name === "Professional" ? "prof" : "basic-master"
                }`}
              >
                <span id="dollar-sign">$ </span>
                {checked ? obj.price.monthly : obj.price.annually}
              </p>
              <ul className="details-container">
                {obj.details.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`detail ${
                      obj.name === "Professional" ? "prof" : "basic-master"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className={`call-to-action ${
                  obj.name === "Professional" ? "prof" : "basic-master"
                }`}
              >
                {obj.callToAction}
              </a>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Card;
