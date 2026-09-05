import {
  EDGE_HORIZONTAL,
  PLAYER_1,
  PLAYER_2,
} from "@/features/game/constants.js";

// Botón que representa una arista de la grilla. Cuando está colocada se
// deshabilita y se pinta con el color del jugador que la jugó; si está libre
// se resalta en hover con el color de acento.
function EdgeButton({ type, row, col, placedBy, onClick }) {
  const handleClick = () => onClick(type, row, col);
  const orientationClass =
    type === EDGE_HORIZONTAL
      ? "edge-button--horizontal"
      : "edge-button--vertical";
  const playerClass =
    placedBy === PLAYER_1
      ? " edge-button--player-1"
      : placedBy === PLAYER_2
        ? " edge-button--player-2"
        : "";
  const orientationLabel = type === EDGE_HORIZONTAL ? "horizontal" : "vertical";

  return (
    <button
      type="button"
      className={`edge-button ${orientationClass}${playerClass}`}
      aria-label={`Arista ${orientationLabel} fila ${row} columna ${col}`}
      disabled={placedBy !== undefined}
      onClick={handleClick}
    />
  );
}

export default EdgeButton;
