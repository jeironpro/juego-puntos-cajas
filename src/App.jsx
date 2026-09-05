import { useGame } from '@/hooks/useGame.js';
import GameScreen from '@/features/game/GameScreen.jsx';
import { DEFAULT_DIFFICULTY } from '@/features/bot/difficulty.js';
import { PLAYER_2 } from '@/features/game/constants.js';
import './App.css';

// Composición raíz: título del juego y pantalla de partida contra el bot.
// El menú con la selección de modo se incorpora en un PR posterior.
function App() {
  const { game, makeMove } = useGame({ botDifficulty: DEFAULT_DIFFICULTY });
  const botTurn = game.turn === PLAYER_2;

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">Puntos y Cajas</h1>
      </header>
      <GameScreen game={game} onMove={makeMove} disabled={botTurn} />
    </main>
  );
}

export default App;