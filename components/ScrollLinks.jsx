import React from "react";
import "./ScrollLinks.css";

const scrollLinks = [
  {
    name: "'EXILE' OFFICIAL MUSIC VIDEO - ERIC ZAYNE ",
    link: "https://example.com",
    image: "../../public/rockstar.png",
    icon: "../../public/play.svg",
  },
  {
    name: "ZOA Energy",
    link: "https://example.com",
    image: "",
    icon: "../../public/link.svg",
  },
  {
    name: "Monster Energy Drink",
    link: "https://images-cdn.ubuy.co.in/633b2f27cace0c51ca6271f6-monster-energy-zero-ultra-sugar-free.jpg",
    image: "../../public/monster.jpg",
    icon: "../../public/link.svg",
  },
  // Add more links as needed
];

function ScrollLinks() {
  return (
    <div className="parent-container">
      <p className="text-content">Scroll for links</p>
      <div className="scroll-links-container">
        {scrollLinks.map((scrollLink, index) => (
          <a
            key={index}
            href={scrollLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-link-wrapper"
          >
            <div
              className={`scroll-link ${!scrollLink.image ? 'no-image' : ''}`}
              style={{
                backgroundImage: scrollLink.image !== '' ? `url(${scrollLink.image})` : 'none',
                backgroundColor: scrollLink.image ? 'transparent' : '#DBEFB3'
              }}
            >
              <div className="scroll-link-content">
                {scrollLink.name && (
                  <h3 className={`scroll-link-name ${!scrollLink.image ? 'no-image-text' : ''}`}>
                    {scrollLink.name}
                  </h3>
                )}
              </div>
              {scrollLink.icon && (
                <img
                  src={scrollLink.icon}
                  alt="icon"
                  className={`scroll-link-icon ${!scrollLink.image ? 'no-image-icon' : ''}`}
                />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ScrollLinks;