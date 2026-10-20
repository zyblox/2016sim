import { VotesBar } from './votesbar.jsx';
import './game.css';

/**
 * A single game card
 * @param {object} game - { id, name, icon, playing, votes: { up, down, percent } }
 */
export function Game({ game }) {
  if (!game) return null;

  const { id, name, icon, playing, votes } = game;

  return (
    <div className='card-item game-item'>
      <a className='card-item-link' href={`/games/${id}`}>
        {icon && <img src={icon} alt={name} className='gameicon' />}
        <p className='gametext'>{name}</p>
        <div className='rbx-game-text-notes xsmall card-text-notes'>
          {`${playing} Playing`}
        </div>
        <VotesBar percent={votes?.percent ?? 0} />
        </a>
    </div>
  );
}
