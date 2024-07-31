import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import creditCardImg from "../../assets/creditcardicons.png";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container footer-container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow Us</h3>
            <ul className="follow">
              <li className="hover-link center">
                <FaInstagram />
              </li>
              <li className="hover-link center">
                <FaFacebook />
              </li>
              <li className="hover-link center">
                <FaXTwitter />
              </li>
              <li className="hover-link center">
                <MdEmail />
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact Us</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Returns And Exchange Policy</li>
              <li className="hover-link">Shipping policy</li>
              <li className="hover-link">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="subfooter center">
          <div className="credit-card-img">
            <img src={creditCardImg} alt="credit Card" />
          </div>

          <p className="copyRight">
            Copyright {new Date().getFullYear()} © <strong>Posterz.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
