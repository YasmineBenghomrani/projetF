import React from "react";

export default function CardSwiperWoman() {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={
            "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <div class="image-overlay"></div>
      </div>
      <div className="content-card">
        <h2>Hero Swiper Woman </h2>
        <div className="footer-card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            mollitia incidunt illo voluptatibus quos, dolorum iure officiis et
            iste quia.
          </p>
        </div>
        <input type="button" value="Voir plus" />
      </div>
    </div>
  );
}
