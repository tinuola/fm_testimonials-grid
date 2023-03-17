import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";
import Data from "./data.json";
import Footer from "./Footer";

const App = () => {
  // console.log(Data);
  return (
    <div className="container">
      <main>
        <section>
          <h1 className="sr-only">
            Testimonials Grid - A Frontend Mentor Project
          </h1>
          {Data.map((item) => {
            const { id, name, image, blurb, testimonial } = item;
            return (
              <Card
                key={id}
                name={name}
                image={image}
                blurb={blurb}
                testimonial={testimonial}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
