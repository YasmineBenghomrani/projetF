import React from "react";

export default function CardProductHome() {
  return (
    <div className="media-card">
      <div className="content-media">
        <div className="image-container">
          <img
            src={
              "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <div class="image-overlay"></div>
        </div>
        <h3>Titre</h3>
        <div className="footer">
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
