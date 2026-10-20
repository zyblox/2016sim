import { useAuth } from "../AuthContext.js";

export default function Nli() {
  const { setLoggedIn } = useAuth();

  return (
    <div className="page">
      <h1>Not logged in</h1>
      <button className="toggle-btn" onClick={() => setLoggedIn(true)}>
        Log in (toggle)
      </button>
    </div>
  );
}
