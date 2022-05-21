import React from "react";
import "./Footer.css";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="sm-footer ">
      <div className="container d-flex align-items-center ">
        <span className="ms-3">
          Copyright © {new Date().getFullYear()} | Powered by{" "}
          <a href="https://github.com/sadiaislam7210" target="_blank" rel="noreferrer">
            sadia
          </a>
          .
        </span>
        <p className="text-end pe-3 m-0">
          <a
            className="me-3"
            href="https://www.facebook.com/profile.php?id=100035941325986"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size="20px" color="#0237ff" />
          </a>
          <a
            className="me-3"
            href="https://twitter.com/SadiaIs37547263"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="25px" color="red" />
          </a>
          <a
            className="me-3"
            href="https://github.com/sadiaislam7210"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="20px" color="black" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
