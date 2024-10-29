import React from "react";
import * as styles from "./Button.module.css";
import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Clique
      </button>
      <h1>{count}</h1>
    </div>
  );
}
