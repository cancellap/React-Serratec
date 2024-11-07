import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderFeed from "../../components/HeaderFeed";
import * as styles from "./Feed.module.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6722c03a2108960b9cc5770a.mockapi.io/posts`)
      .then((response) => {
        console.log("foi");
        setPosts(response.data);
      })
      .catch(() => console.log("nao foi"));
  }, []);

  function apagar(id) {
    axios
      .delete(`https://6722c03a2108960b9cc5770a.mockapi.io/posts/${id}`)
      .then(() => {
        console.log("Apagado");
        setPosts(posts.filter((post) => post.id != id));
      });
  }
  return (
    <div>
      <HeaderFeed />
      <main>
        <div className={styles.cards}>
          {posts.map((post, key) => (
            <div className={styles.card}>
              <header>
                <h2>{post.titulo}</h2>
              </header>

              <div className={styles.line} />

              <p>{post.descricao}</p>

              <div className={styles.btns}>
                <div className={styles.btnEdit}>
                  <Link to={`/update/${post.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>

                <div className={styles.btnReadMore}>
                  <Link to={`/more/${post.id}`}>
                    <button>Leia mais</button>
                  </Link>
                </div>
                <div className={styles.btnDelete}>
                  <button onClick={() => apagar(post.id)}>Apagar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
