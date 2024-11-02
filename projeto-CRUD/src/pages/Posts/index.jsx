import React from "react";
import Header from "../../components/Header";
import * as styles from "./Post.module.css";
import { useForm } from "react-hook-form";

export default function Posts() {
  const addPost = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Criar Postagem</h1>
          <div className={styles.linePost} />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="titulo">Titulo</label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  {...register("titulo")}
                />
              </div>

              <div className={styles.fields}>
                <label htmlFor="descricao">Descrição</label>
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  {...register("descricao")}
                />
              </div>

              <div className={styles.fields}>
                <label htmlFor="conteudo">Conteudo</label>
                <textarea
                  type="text"
                  name="conteudo"
                  id="conteudo"
                  cols="30"
                  rows="10"
                  {...register("conteudo")}
                >
                  {" "}
                </textarea>
              </div>

              <div className={styles.btnPost}>
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
