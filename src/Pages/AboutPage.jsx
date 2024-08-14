import React from "react";
import Costa from "../assets/Costa.webp";
import Destin from "../assets/Destin.jpeg";
import Pokhara from "../assets/Pokhara.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-heading">
        "Explore the Unseen, Discover the unforgattable"
      </h1>
      <h2 className="about-subheading">Meet our Team</h2>
      <ul className="about-list">
        <li>
          <div className="about-box">
            <img src={Destin} alt="Destin" width={100} height="auto" />
            <div class="text-content">
              <h3 class="heading">Peter Woods</h3>
              <p class="paragraph">My favorite place is Destin, Florida</p>
            </div>
          </div>
        </li>
        <li>
          <div className="about-box">
            <img
              src={Costa}
              alt="Costa da Caparica"
              width={100}
              height="auto"
            />
            <div class="text-content">
              <h3 class="heading">Dmytro Labenskyy</h3>
              <p class="paragraph">
                My favorite place is Costa da Caparica, Lisbon
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="about-box">
            <img src={Pokhara} alt="Pokhara" width={100} height="auto" />
            <div class="text-content">
              <h3 class="heading">Prashidhika Neupane</h3>
              <p class="paragraph">My favorite place is Pokhara.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
