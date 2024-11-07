import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as styles from "../More/More.module.css";

export default function More() {
  const { id } = useParams();
  const [readMore, setReadMore] = useState({});

  useEffect(() => {
    axios
      .get(`https://6722c03a2108960b9cc5770a.mockapi.io/posts/${id}`)
      .then((response) => {
        setReadMore(response.data);
      });
  });

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <header>
              <h2>{readMore.titulo}</h2>
            </header>
            <div className={styles.line} />
            <p>{readMore.conteudo}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
