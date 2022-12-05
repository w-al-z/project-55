import React from "react";
import "./Form.css";
import location from "../Assets/images/Location.png";
import phone from "../Assets/images/Calling.png";
import message from "../Assets/images/Message.png";
import facebook from "../Assets/images/facebook.png";
import twitter from "../Assets/images/twitter.png";
import linkedin from "../Assets/images/linkedin.png";
import instagram from "../Assets/images/instagram.png";
const Form = () => {
  return (
    <div className="Form">
      <div className="shayo">
        <p className="team">
          <span className="build">Build</span>Your Dream Team!
        </p>
        <p className="fill">
          Start your team development with a free consultation. Fill out the
          form and a Vacanxe representative will contact you.
        </p>

        <form className="formular1">
          <label className="your-name">
            Your name
            <br />
            <input placeholder="Enter Your name" className="name" type="text" />
          </label>
        </form>
        <form className="formular2">
          <label className="your-name">
            Your email
            <br />
            <input
              placeholder="Enter Your email"
              className="name"
              type="text"
            />
          </label>
        </form>
        <form className="formular2">
          <label className="your-name">
            Your Phone Number
            <br />
            <input className="numbers" type="text" />
          </label>
        </form>
        <form className="formular2">
          <label className="your-name">
            Your Company Name
            <br />
            <input
              placeholder="Enter Your Company Name"
              className="numbers"
              type="text"
            />
          </label>
        </form>
        <form className="formular2">
          <label className="your-name">
            Message
            <br />
            <input placeholder="Type here..." className="message" type="text" />
          </label>
        </form>

        <button className="consult">Consult with us</button>
      </div>
      <div className="shayo2">
        <p className="info">Contact info:</p>

        <div className="ave">
          <img className="locations" src={location} />
          <p className="washington">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
        </div>

        <div className="phones">
          <div>
            <img src={phone} />
          </div>
          <div>
            <p>(505) 555-0119</p>
            <p>(505) 555-0120</p>
            <p>(505) 555-0125</p>
          </div>
        </div>

        <div className="messanger">
          <img src={message} />
          <p>consult@vacanxe.com</p>
        </div>

        <p className="followus">Follow us:</p>

        <div className="apps">
          <img src={facebook} />
          <img src={twitter} />
          <img src={linkedin} />
          <img src={instagram} />
        </div>
      </div>
    </div>
  );
};

export default Form;
