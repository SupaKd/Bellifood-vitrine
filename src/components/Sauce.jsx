import React from "react";
import Marquee from "react-fast-marquee";
 
const items = [
  "Algérienne", "Mayonnaise", "Barbecue", "Fish", "Marocaine",
  "Andalouse", "Curry", "Brazil", "Magic Onion", "Blanche",
  "Samourai", "Ketchup", "Biggy", "Poivre", "Moutarde", "Harissa"
];

function SauceEtViandeMarquee() {
  return (
    <div className="marquee-container">
        <h3>Nos sauces</h3>
      <Marquee gradient={false} speed={30}>
        {items.map((item, index) => (
          <span className="marquee-item" key={index}>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default SauceEtViandeMarquee;
