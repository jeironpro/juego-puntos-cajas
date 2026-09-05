import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useGame } from "./useGame.js";
import {
  EDGE_HORIZONTAL,
  PLAYER_2,
  TOTAL_EDGES,
} from "@/features/game/constants.js";

describe("useGame", () => {
  it("applies a move and switches the turn", () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.makeMove(EDGE_HORIZONTAL, 0, 0));
    expect(result.current.game.edges.size).toBe(1);
    expect(result.current.game.turn).toBe(PLAYER_2);
  });

  it("ignores a move on an already placed edge", () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.makeMove(EDGE_HORIZONTAL, 0, 0));
    act(() => result.current.makeMove(EDGE_HORIZONTAL, 0, 0));
    expect(result.current.game.edges.size).toBe(1);
  });

  it("restarts the game", () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.makeMove(EDGE_HORIZONTAL, 0, 0));
    act(() => result.current.restart());
    expect(result.current.game.edges.size).toBe(0);
  });

  it("starts with all edges available", () => {
    const { result } = renderHook(() => useGame());
    expect(result.current.game.edges.size).toBe(0);
    expect(TOTAL_EDGES).toBe(60);
  });
});
