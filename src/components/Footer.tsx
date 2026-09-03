import { useLanguage } from "../context/useLanguage";
import "../styles/footer.css";

export default function Footer() {
  const { translate } = useLanguage();

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Patrick Brito — {translate.footer.rights}
      </p>
    </footer>
  );
}
