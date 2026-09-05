import { PLAYER_1, PLAYER_2 } from "@/features/game/constants.js";

// Celda de una caja: muestra un relleno sutil con el color del jugador
// propietario cuando la caja está completada; si está libre queda vacía
function BoxCell({ owner }) {
  const ownerClass =
    owner === PLAYER_1
      ? " box-cell--player-1"
      : owner === PLAYER_2
        ? " box-cell--player-2"
        : "";
  return <div className={`box-cell${ownerClass}`} aria-hidden="true" />;
}

export default BoxCell;
