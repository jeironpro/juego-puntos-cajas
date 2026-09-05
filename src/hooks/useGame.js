import { useCallback, useState } from "react";
import { createInitialGame } from "@/features/game/board.js";
import { applyMove } from "@/features/game/game.js";

// Maneja el estado de la partida: aplica jugadas del jugador en turno y reinicia.
// La jugada automática del bot se incorpora en un PR posterior.
export function useGame() {
  const [game, setGame] = useState(() => createInitialGame());

  const makeMove = useCallback((type, row, col) => {
    setGame((current) => {
      const next = applyMove(current, type, row, col, current.turn);
      return next === null ? current : next;
    });
  }, []);

  const restart = useCallback(() => {
    setGame(createInitialGame());
  }, []);

  return { game, makeMove, restart };
}
