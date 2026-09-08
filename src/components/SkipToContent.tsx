import { useLanguage } from "../context/useLanguage";

export default function SkipToContent() {
  const { translate } = useLanguage();

  return (
    <a href="#main-content" className="skip-to-content">
      {translate.accessibility.skipToContent}
    </a>
  );
}
