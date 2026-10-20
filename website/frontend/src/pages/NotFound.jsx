import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <h1>Page Not Found</h1>
      <p>
        The page you are looking for does not exist. <Link to="/">Go home</Link>
      </p>
    </div>
  );
}
