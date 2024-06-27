import React from 'react';
import './SocialLinks.css';

const socialLinks = [
  { link: 'https://www.linkedin.com', logo: '../../public/linkedin.svg' },
  { link: 'https://www.youtube.com', logo: '../../public/youtube.svg' },
  { link: 'https://www.whatsapp.com', logo: '../../public/whatsapp.svg' },
  { link: 'https://www.instagram.com', logo: '../../public/instagram.svg' },
  { link: 'https://www.twitter.com', logo: '../../public/twitter.svg' },
];


function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          <img src={social.logo} alt={`${social.link} logo`} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
