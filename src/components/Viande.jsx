import React from "react";
import Marquee from "react-fast-marquee";

const viandes = [
  "Chicken", "Cordon bleu", "Steak Hachée", "Kebab", "Escalope Mariné"
];

function ViandeMarquee() {
  return (
    <div className="marquee-container">
      <h3>Nos viandes</h3>
      <Marquee gradient={false} speed={30} direction="right">
        {viandes.map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default ViandeMarquee;
