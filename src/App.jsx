import { useGame } from "@/hooks/useGame.js";
import GameScreen from "@/features/game/GameScreen.jsx";
import "./App.css";

// Composición raíz: título del juego y pantalla de partida.
// El menú con la selección de modo se incorpora en un PR posterior.
function App() {
  const { game, makeMove } = useGame();

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">Puntos y Cajas</h1>
      </header>
      <GameScreen game={game} onMove={makeMove} />
    </main>
  );
}

export default App;
