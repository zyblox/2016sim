import { Game } from "./game.jsx";
import "./gameslist.css";

export function GamesList({ games }) {
  const items = Array.isArray(games) ? games : [];

  return (
    <ul className="hlist games">
      {items.map((game, index) => (
        <li
          className="list-item card game"
          key={game?.id ?? index}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Game game={game} />
        </li>
      ))}
    </ul>
  );
}