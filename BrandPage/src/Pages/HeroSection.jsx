import flipkart from "../Assets/flipkart.png";
import amazon from "../Assets/amazon.png";
import hero from "../Assets/hero-image.png";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="hero-title">YOUR FEET DESERVE THE BEST</p>
        <p className="hero-description">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-buttons">
          <button className="hero-button">Shop Now</button>
          <button className="hero-button">Category</button>
        </div>
        <p className="hero-subtitle">Also Available on</p>
        <div className="hero-icons">
          <img src={flipkart} alt="Flipkart" className="hero-icon" />
          <img src={amazon} alt="Amazon" className="hero-icon" />
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero" className="hero-img" />
      </div>
    </div>
  );
}
