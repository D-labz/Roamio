import React from "react";
import Costa from "../assets/Costa.webp";
import Destin from "../assets/Destin.jpeg";
import Pokhara from "../assets/Pokhara.jpg";
import github from "../assets/github.png";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-heading">
        "Explore the Unseen, Discover the Unforgettable"
      </h1>
      <h2 className="about-subheading">Meet our Team</h2>
      <ul className="about-list">
        <li>
          <div className="about-box">
            <img src={Destin} alt="Destin" width={100} height="auto" />
            <div className="text-content">
              <h3 className="heading">Peter Woods</h3>
              <p className="paragraph">My favorite place is Destin, Florida.</p>
              <a href="https://github.com/woodspc" target="_blank">
                <img src={github} alt="GitHub Logo" />
              </a>
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
            <div className="text-content">
              <h3 className="heading">Dmytro Labenskyy</h3>
              <p className="paragraph">
                My favorite place is Costa da Caparica, Lisbon.
              </p>
              <a href="https://github.com/D-labz" target="_blank">
                <img src={github} alt="GitHub Logo" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="about-box">
            <img src={Pokhara} alt="Pokhara" width={100} height="auto" />
            <div className="text-content">
              <h3 className="heading">Prashidhika Neupane</h3>
              <p className="paragraph">My favorite place is Pokhara, Nepal.</p>
              <a href="https://github.com/Prashidhika" target="_blank">
                <img src={github} alt="GitHub Logo" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
