import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Board from "./Board.jsx";
import { createInitialGame } from "@/features/game/board.js";
import {
  EDGE_HORIZONTAL,
  EDGE_VERTICAL,
  TOTAL_EDGES,
} from "@/features/game/constants.js";

describe("Board", () => {
  it("renders one button per edge", () => {
    render(<Board game={createInitialGame()} onMove={() => {}} />);
    expect(screen.getAllByRole("button")).toHaveLength(TOTAL_EDGES);
  });

  it("calls onMove with the edge coordinates when clicked", async () => {
    const user = userEvent.setup();
    const onMove = vi.fn();
    render(<Board game={createInitialGame()} onMove={onMove} />);
    await user.click(
      screen.getByRole("button", {
        name: "Arista horizontal fila 0 columna 0",
      }),
    );
    expect(onMove).toHaveBeenCalledWith(EDGE_HORIZONTAL, 0, 0);
    await user.click(
      screen.getByRole("button", { name: "Arista vertical fila 2 columna 3" }),
    );
    expect(onMove).toHaveBeenCalledWith(EDGE_VERTICAL, 2, 3);
  });

  it("disables placed edges", () => {
    const game = createInitialGame();
    game.edges.set("H-0-0", 1);
    render(<Board game={game} onMove={() => {}} />);
    expect(
      screen.getByRole("button", {
        name: "Arista horizontal fila 0 columna 0",
      }),
    ).toBeDisabled();
  });

  it("ignores clicks when disabled", async () => {
    const user = userEvent.setup();
    const onMove = vi.fn();
    render(<Board game={createInitialGame()} onMove={onMove} disabled />);
    await user.click(
      screen.getByRole("button", {
        name: "Arista horizontal fila 0 columna 0",
      }),
    );
    expect(onMove).not.toHaveBeenCalled();
  });
});
