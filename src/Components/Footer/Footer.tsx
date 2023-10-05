import "./Footer.css";
import logo from "../../assets/logo4.png";
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1700 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="footer " data-aos="zoom-in-right">
        <div className="container footer-grid">
          <div className="footer-content" data-aos="zoom-in-right">
            <a href="/" className="footer-logo">
              <img src={logo} alt="" />
            </a>
            <div className="footer-description">
              We are a very famous coffe shop that have different types of
              drinks. We are located in different cities like Italy,Germany and{" "}
              Switzerland.You are Welcomed whenever you want! from 8am-9pm
            </div>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <AiOutlinePhone className="icon" />
                <span>(+350)2617 - 261</span>
              </li>
              <li className="footer-contact-item">
                <MdOutlineLocationOn className="icon" />
                <span>London-Main Street</span>
              </li>
              <li className="footer-contact-item">
                <FaRegEnvelope className="icon" />
                <span>Coffe@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="footer-content" data-aos="zoom-in-right">
            <h3 style={{ color: "white" }} className="social">
              Follow us on social media!
            </h3>
            <br />
            <ul className="footer-links">
              <li>
                <a href="#about" className="footer-link">
                  <FaCaretRight className="icon" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="footer-link">
                  <FaCaretRight className="icon" />
                  Menu
                </a>
              </li>
              <li>
                <a href="#features" className="footer-link">
                  <FaCaretRight className="icon" />
                  Features
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer-link">
                  <FaCaretRight className="icon" />
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-content" data-aos="zoom-in-right">
            <h3 className="footer-title">NewsLetter</h3>
            <p className="footer-description">
              Subscribe Our NewsLetter To Get Latests Updates! <br />
              &copy; CopyRight Coffee Shop By Amar Lahlouh
            </p>
            <form action="" className="subscribe-form">
              <input
                type="text"
                className="form-input subscribe-input"
                placeholder="Your Email"
              />
              <button className="btn btn-flex subscribe">
                <FaRegEnvelope /> Subscribe Now
              </button>
            </form>
            <div className="form-socials">
              <h3 className="footer-social-follow">Follow Us:</h3>
              <div className="links">
                {" "}
                <a href="/" className="feature-social-link">
                  <FaFacebookF />
                </a>
                <a href="/" className="feature-social-link">
                  <FaTwitter />
                </a>
                <a href="/" className="feature-social-link">
                  <FaLinkedinIn />
                </a>
                <a href="/" className="feature-social-link">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright-text" data-aos="zoom-in-right">
          &copy; CopyRight Coffee Shop By Amar Lahlouh
        </p>
      </div>
    </div>
  );
}

export default Footer;
