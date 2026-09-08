import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import "../styles/not-found.css";

export default function NotFound() {
  const { translate } = useLanguage();

  return (
    <main className="not-found">
      <p className="not-found-code">404</p>
      <h1 className="not-found-title">{translate.notFound.title}</h1>
      <p className="not-found-text">{translate.notFound.text}</p>
      <Link to="/" className="not-found-btn">
        {translate.notFound.back}
      </Link>
    </main>
  );
}
