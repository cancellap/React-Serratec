import React from "react";
import * as styles from "./HeaderFeed.module.css";
import { Link } from "react-router-dom";

export default function HeaderFeed() {
  return (
    <header>
      <div className="styles.container">
        <div className={styles.logo}>
          <h1>Posts CRUD React</h1>
        </div>
        <div>
          <Link to={"/posts"}>
            {" "}
            <button className={styles.btnNewPost}>Novo Post</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
