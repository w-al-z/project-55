import React from "react";
import "./Footer.css";
import social from "../Assets/images/Social.png";
import logos from "../Assets/images/logo 1.png";

const Footer = () => {
  return (
    <div className="Footers">
      <div className="width">
        <div>
          <img className="omoor" src={logos} />
        </div>
      </div>
      <div className="Footer">
        <div className="bttnn">
          <p className="engagings">
            Your ulitmate email solution to grow business and engaging with
            future customers and clients.
          </p>

          <button className="ask-question">Ask Question</button>
        </div>

        <div className="fluck">
          <div>
            <p className="meen">Community</p>
            <div className="for-talents">
              <p>For Talents</p>
              <p>For Companies</p>
              <p>Facebook Group</p>
              <p>FAQ</p>
            </div>
          </div>
          <div>
            <p className="meener">About us</p>
            <div className="meet-the">
              <p>Meet the Team</p>
              <p>Our Story</p>
              <p>Career</p>
            </div>
          </div>
          <div>
            <p className="meenest">Contacts</p>
            <div>
              <p className="feel-free">
                Feel free to get in touch with us via phone or send us a
                message.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tired">
        <p className="problemms">© Vacanxe 2022, All Rights Reserved</p>
        <div>
          <img src={social} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
