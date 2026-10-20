import { useEffect, useState } from "react";
import { GamesList } from "../components/gameslist.jsx";
import "./pages.css";

export default function Games() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const source = new EventSource("/api/roblox/home");

    source.addEventListener("row", (event) => {
      const row = JSON.parse(event.data);

      setRows((current) => {
        const existingIndex = current.findIndex(
          (item) => item.id === row.id
        );

        const updated = [...current];

        if (existingIndex >= 0) {
          updated[existingIndex] = row;
        } else {
          updated.push(row);
        }

        // Keep the same order as Roblox's home page categories.
        updated.sort((a, b) => a.index - b.index);

        return updated;
      });

      setStatus("ready");
    });

    source.addEventListener("icons", (event) => {
      const { rowId, icons } = JSON.parse(event.data);

      setRows((current) =>
        current.map((row) => {
          if (row.id !== rowId) return row;

          return {
            ...row,
            games: row.games.map((game) => ({
              ...game,
              icon: icons[String(game.universeId)] || game.icon
            }))
          };
        })
      );
    });

    source.addEventListener("done", () => {
      source.close();
      setStatus("ready");
    });

    source.addEventListener("api-error", () => {
      source.close();
      setStatus("error");
    });

    source.onerror = () => {
      // EventSource reconnects automatically for temporary connection
      // failures. Only show an error if the connection is fully closed
      // and no categories have arrived.
      if (source.readyState === EventSource.CLOSED) {
        setStatus((current) =>
          current === "loading" ? "error" : current
        );
      }
    };

    return () => {
      source.close();
    };
  }, []);

  return (
    <div className="page">
      {status === "loading" && rows.length === 0 && (
        <p>Loading…</p>
      )}

      {status === "error" && rows.length === 0 && (
        <p>Could not load the Roblox API.</p>
      )}

      {rows.map((row) => (
        <section className="games-section" key={row.id}>
          {row.title && (
            <h2 className="games-section-title">{row.title}</h2>
          )}

          <GamesList games={row.games} />
        </section>
      ))}
    </div>
  );
}