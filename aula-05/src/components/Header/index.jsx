import React from "react";
import * as styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Empresa Marcinho LTDA</h2>{" "}
      <div className={styles.menu}>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/empresa" className={styles.link}>
                Empresa
              </Link>
            </li>
            <li>
              <Link to="/contato" className={styles.link}>
                contato
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/sobre" className={styles.link}>
                sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
