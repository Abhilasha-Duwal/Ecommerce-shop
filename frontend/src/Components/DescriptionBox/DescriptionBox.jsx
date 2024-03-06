import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Discover the epitome of elegance and functionality with our latest
          collection of exquisite products. From cutting-edge gadgets to
          timeless fashion essentials, we curate an unparalleled selection that
          caters to your every need. Elevate your lifestyle with premium quality
          items crafted with meticulous attention to detail, ensuring both style
          and substance. With seamless navigation and secure transactions,
          indulging in luxury has never been easier. Browse through our virtual
          aisles and embark on a journey of sophistication and convenience. Shop
          now and experience the pinnacle of online shopping excellence.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
