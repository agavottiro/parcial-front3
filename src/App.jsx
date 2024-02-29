import { useState } from "react";
import Card from "./Components/Card";
import './App.css'

function App() {
  const [fanatico, setFanatico] = useState({
    name: "",
    tvShow: "",
  });
  console.log(fanatico);
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fanatico.name.length < 3 ||
      fanatico.name.startsWith(" ") ||
      fanatico.tvShow.length < 6
    ) {
      setError(true);
      setShowCard(false);
    } else {
      setShowCard(true);
      setError(false);
    }
  };

  return (
    <div>
      <h2>¡Cuéntanos, fanático! ¿Cuál es tu serie favorita?</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          onChange={(e) => setFanatico({ ...fanatico, name: e.target.value })}
        ></input>
        <label>Serie favorita: </label>
        <input
          type="text"
          onChange={(e) => setFanatico({ ...fanatico, tvShow: e.target.value })}
        ></input>
        <button type="submit">Respuesta definitiva</button>
      </form>
      {error && <p>Por favor verifica que la información esté correcta</p>}
      {showCard && <Card name={fanatico.name} tvShow={fanatico.tvShow} />}
    </div>
  );
}

export default App;
