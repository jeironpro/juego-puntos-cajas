import Board from "@/features/board/Board.jsx";
import "./GameScreen.css";

// Pantalla de partida: compone el tablero y el aviso del jugador en turno.
// El marcador y los controles de partida se incorporan en PRs posteriores.
function GameScreen({ game, onMove, disabled = false }) {
  return (
    <section className="game-screen" aria-label="Pantalla de partida">
      <Board game={game} onMove={onMove} disabled={disabled} />
      <p className="game-screen__turn" role="status">
        Turno del jugador {game.turn}
      </p>
    </section>
  );
}

export default GameScreen;
