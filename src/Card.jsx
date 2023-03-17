import React from "react";

const Card = ({ name, image, blurb, testimonial }) => {
  return (
    <article>
      <header>
        <img src={`/images/${image}`} alt={`Student ${name}`} />
        <p>{name}</p>
        <p>Verified Graduate</p>
      </header>
      <div>
        <h2>{blurb}</h2>
        <p>{testimonial}</p>
      </div>
    </article>
  );
};

export default Card;
