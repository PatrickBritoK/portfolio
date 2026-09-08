import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";
import { useLanguage } from "../context/useLanguage";

export default function SearchButton() {
  const { translate } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <button
        type="button"
        className="search-toggle"
        aria-label={translate.search.open}
        title={translate.search.open}
        onClick={() => setOpen(true)}
      >
        <FiSearch />
      </button>
      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  );
}
