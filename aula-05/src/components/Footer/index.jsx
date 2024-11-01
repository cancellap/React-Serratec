import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import * as styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p>
        <span>Rodapé da página</span> &copy;2024 -{" "}
      </p>
    </footer>
  );
}
