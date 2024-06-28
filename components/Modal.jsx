import React, { useState } from "react";
import "./Modal.css";
import {createPortal} from 'react-dom'


const Modal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Email");

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="header-modal">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          <h2>Subscribe by,</h2>
        </div>
        <div className="modal-tabs">
          <button
            className={`tab-button ${activeTab === "Email" ? "active" : ""}`}
            onClick={() => setActiveTab("Email")}
          >
            Email
          </button>
          <button
            className={`tab-button ${activeTab === "Web" ? "active" : ""}`}
            onClick={() => setActiveTab("Web")}
          >
            Web
          </button>
          <button
            className={`tab-button ${activeTab === "Phone" ? "active" : ""}`}
            onClick={() => setActiveTab("Phone")}
          >
            Phone
          </button>
        </div>
        <div className="modal-body">
          {activeTab === "Email" && (
            <div>
              <p className="small-text">
                Vardan Sharma can use your email in order to send any updates
                related to the account
              </p>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              ></input>
            </div>
          )}
          {activeTab === "Web" && (
            <div>
              <p className="small-text">
                Allow Vardan Sharma to send web push notifications on this
                device.
              </p>
              <img className="webpush-img" src="../../public/webpush.svg" />
            </div>
          )}
          {activeTab === "Phone" && (
            <div>
              <p className="small-text">
                Allow Vardan Sharma to Whatsapp and/or sms to the following
                phone number
              </p>
              <input
                type="tel"
                id="tel"
                placeholder="Enter your phone number"
              ></input>
              
            </div>
          )}
          <div className="modal-footer">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to receive notifications</label>
          </div>
          <button className="modal-allow">Allow notifications</button>
        </div>
      </div>
    </div>,
    document.getElementById('content')
  );
};

export default Modal;
