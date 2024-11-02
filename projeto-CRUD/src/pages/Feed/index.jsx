import React from "react";
import { Link } from "react-router-dom";
import HeaderFeed from "../../components/HeaderFeed";
import * as styles from "./Feed.module.css";

export default function Feed() {
  return (
    <div>
      <HeaderFeed />
      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <header style={{ backgroundColor: "none" }}>
              <h2 style={{ backgroundColor: "none" }}>Consumindo API</h2>
            </header>
            <div className={styles.line} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              aperiam quidem id aliquam, possimus eius rem, distinctio, animi
              enim corporis ad veniam? Ipsa eos quisquam ut sit libero neque.
              Voluptatem?
            </p>
            <div className={styles.btns}>
              <div className={styles.btnEdit}>
                <Link to="/update">
                  <button>Editar</button>
                </Link>
              </div>
              <div className={styles.btnReadMore}>
                <Link to="/more">
                  <button>Leia mais</button>
                </Link>
              </div>
              <div className={styles.btnDelete}>
                <button>Apagar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
