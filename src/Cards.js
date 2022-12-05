import React from "react";
import "./Cards.css";
import arrow from "./Assets/images/arrow.svg";
import girl from "./Assets/images/girl.png";
import girl2 from "./Assets/images/girl2.png";
import girl3 from "./Assets/images/girl3.png";
const Cards = () => {
  return (
    <div>
      <div className="spaces1">
        <div className="space1">
          <p className="young">Get The best version of young talents</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>

          <div className="signnow">
            <p className="upnow">Signup now</p>

            <div className="arrowing">
              <img src={arrow} />
            </div>
          </div>
        </div>
        <div className="space1-pro">
          <img src={girl} />
        </div>
      </div>
      <div className="spaces2">
        <div className="space2">
          <img src={girl2} />
        </div>

        <div className="space2-pro">
          <p className="job">Your Job Posting is on Steroids</p>
          <p className="gain">
            Gain brand authority and visibility with the help of the largest IT
            service ecosystem. Find customers who are looking for your solution
            right now!
          </p>

          <div className="signnow">
            <p className="upnow">Signup now</p>

            <div className="arrowing">
              <img src={arrow} />
            </div>
          </div>
        </div>
      </div>

      <div className="spaces3">
        <div className="space3">
          <p className="autopilot">
            It’s like having Your Recruitment on autopilot
          </p>
          <p className="collateral">
            Share collaterals and documents that are automatically branded.
            Leverage a rich partner network that sells your solution exactly the
            way your best salesman would.
          </p>

          <div className="signnow">
            <p className="upnow">Signup now</p>

            <div className="arrowing">
              <img src={arrow} />
            </div>
          </div>
        </div>

        <div className="space3-pro">
          <img src={girl3} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
