// export default function App() {
//   return(
//   <h1>Hello world!</h1>
// );
// }

import Exemplo from "./components/Exemplo";
import Time from "./components/Time";

const App = () => {
  // <>
  //   <h1>Hello World</h1>
  //   <h2>Data: {new Date().toLocaleDateString()}</h2>
  //   <h2>Hora: {new Date().toLocaleTimeString()}</h2>
  // </>
  const elementosHtml = (
    <div>
      <h1>Hello World</h1>
      <h2>Data: {new Date().toLocaleDateString()}</h2>
      <h2>Hora: {new Date().toLocaleTimeString()}</h2>
      <Exemplo/>

    </div>
  );
  return elementosHtml;
};
export default App;
