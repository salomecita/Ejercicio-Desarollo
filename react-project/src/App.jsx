import {useState, useEffect} from 'react';

function Timer() {
  useEffect(() => {
    const id = setInterval(()=> console.log('tick'), 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Timer activo</p>

}
export default function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Ejercicio 1: React Logs</h2>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} componente
      </button>
      {mostrar && <Timer />}
    </div>
  );
} 