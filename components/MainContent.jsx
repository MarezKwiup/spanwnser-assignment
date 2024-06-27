import React from "react";
import "./MainContent.css";
import bellUrl from '../../public/bell2.svg'
import dpUrl from '../../public/dp.jpg'

function MainContent() {
  return (
    <div className="profile-card">
      <div className="text-content">
        <div>
          <h3 className="h">
            H<span className="ello">ello i'm,</span>
          </h3>
          <h2 className="name">Vardan Sharma</h2>
        </div>
        <p className="description">
          My awesome description will be written over here, which would not be
          more than 30 words, basically the bio caption will come here.
        </p>
        <div className="buttons">
          <button className="subscribe">Subscribe me
            <img src={bellUrl} alt='bell logo'/>
          </button>
          <button>Custom action</button>
        </div>
      </div>
      <div className="image">
        <img src={dpUrl} alt="Omkar Ajagunde" />
      </div>
    </div>
  );
}

export default MainContent;