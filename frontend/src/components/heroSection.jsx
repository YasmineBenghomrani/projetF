import React from "react";

export default function HeroSection() {
  return (
    <section class="heroSection">
      <div class="overlay">
        <div class="content">
          <div className="line"></div>
          <h1> Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius
            omnis corporis consequatur. Vero assumenda porro omnis cum, hic
            modi.
          </p>
          <input type="button" className="check" value="check" />
        </div>
      </div>
    </section>
  );
}
