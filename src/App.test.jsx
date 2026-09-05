import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';

describe('App', () => {
  it('shows the home screen with the game options', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Puntos y Cajas' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /vs bot/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /2 jugadores/i })).toBeInTheDocument();
  });

  it('starts a local game and shows the scoreboard', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /2 jugadores/i }));
    await user.click(screen.getByRole('button', { name: 'Jugar' }));
    expect(screen.getByRole('region', { name: 'Marcador de la partida' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'Tablero de puntos y cajas' })).toBeInTheDocument();
  });

  it('shows the bot difficulty selector in bot mode', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Difícil' }));
    await user.click(screen.getByRole('button', { name: 'Jugar' }));
    expect(screen.getByRole('region', { name: 'Marcador de la partida' })).toBeInTheDocument();
    expect(screen.getByText('Difícil')).toBeInTheDocument();
  });
});