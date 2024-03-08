import React from "react";
import "./Login.css";
export default function CardLogin() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>

          <div className="additional-options">
            <a href="#" className="create-account-link">
              Create an account
            </a>
            <span>or</span>
            <button className="google-login">Login with Google</button>
          </div>
        </div>

        <div className="video-section">
          <video autoPlay muted loop>
            {/* Remplacez ce lien par le lien de votre vidéo */}
            <source src="your_video_link.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
