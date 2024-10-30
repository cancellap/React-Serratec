import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [nome, setNomeAluno] = useState("Pedro");
  const [totalAluno, setTotalAlunos] = useState(20);

  return (
    <UserContext.Provider value={{ nome, setNomeAluno, totalAluno }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
