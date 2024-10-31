import React, { useState } from "react";

export default function ExemploCondicional() {
  const [log, setLog] = useState(false);

  const login = () => "Login efetuado";
  const logout = () => "Desconectado";

  return (
    <div>
      <p>{log ? login() : logout()}</p>
      <button onClick={() => setLog(!log)}>{!log ? "login" : "logout"}</button>
    </div>
  );
}
