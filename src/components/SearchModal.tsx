import { useEffect, useMemo, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { techstack } from "../data/techstack";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";
import { slug } from "../utils/slug";
import "../styles/search.css";

interface SearchItem {
  id: string;
  category: "technology" | "experience" | "project" | "certification" | "education" | "language";
  categoryLabel: string;
  title: string;
  subtitle?: string;
  targetId: string;
  keywords: string[];
}

interface Props {
  onClose: () => void;
}

export default function SearchModal({ onClose }: Props) {
  const { translate } = useLanguage();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const items = useMemo<SearchItem[]>(() => {
    const result: SearchItem[] = [];

    techstack.forEach((tech) => {
      result.push({
        id: `tech-${slug(tech.name)}`,
        category: "technology",
        categoryLabel: translate.search.categories.technology,
        title: tech.name,
        subtitle:
          tech.category === "professional"
            ? translate.techStack.professionalLabel
            : translate.techStack.learningLabel,
        targetId: `tech-${slug(tech.name)}`,
        keywords: [tech.name, ...(tech.aliases ?? [])],
      });
    });

    experiences.forEach((exp) => {
      const content = translate.experience[exp.translationKey];
      result.push({
        id: `exp-${exp.translationKey}`,
        category: "experience",
        categoryLabel: translate.search.categories.experience,
        title: content.company,
        subtitle: content.role,
        targetId: `experience-${exp.translationKey}`,
        keywords: [content.company, content.role, ...exp.techs],
      });
    });

    projects.forEach((project, index) => {
      const content = translate.projects.items[index];
      if (!content) return;
      result.push({
        id: `proj-${project.id}`,
        category: "project",
        categoryLabel: translate.search.categories.project,
        title: content.name,
        subtitle: content.description.slice(0, 90),
        targetId: `project-${project.id}`,
        keywords: [content.name, content.description, ...project.techs],
      });
    });

    translate.certifications.items.forEach((cert, index) => {
      result.push({
        id: `cert-${index}`,
        category: "certification",
        categoryLabel: translate.search.categories.certification,
        title: cert.title,
        subtitle: cert.institution,
        targetId: `certification-${index}`,
        keywords: [cert.title, cert.institution, ...cert.techs],
      });
    });

    translate.education.items.forEach((edu, index) => {
      result.push({
        id: `edu-${index}`,
        category: "education",
        categoryLabel: translate.search.categories.education,
        title: edu.course,
        subtitle: edu.period,
        targetId: `education-${index}`,
        keywords: [edu.course, ...edu.subjects.map((s) => s.name)],
      });
    });

    translate.languages.items.forEach((language, index) => {
      result.push({
        id: `lang-${index}`,
        category: "language",
        categoryLabel: translate.search.categories.language,
        title: language.name,
        subtitle: language.level,
        targetId: `language-${index}`,
        keywords: [language.name, language.level],
      });
    });

    return result;
  }, [translate]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return items.filter((item) =>
      item.keywords.some((kw) => kw.toLowerCase().includes(q)),
    );
  }, [query, items]);

  const grouped = useMemo(() => {
    const map = new Map<string, { label: string; items: SearchItem[] }>();
    results.forEach((item) => {
      if (!map.has(item.category)) {
        map.set(item.category, { label: item.categoryLabel, items: [] });
      }
      map.get(item.category)!.items.push(item);
    });
    return Array.from(map.values());
  }, [results]);

  const handleSelect = (item: SearchItem) => {
    onClose();
    requestAnimationFrame(() => {
      const el = document.getElementById(item.targetId);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.remove("search-highlight");
      // Force reflow so the animation can restart when the same item is selected again
      void el.offsetWidth;
      el.classList.add("search-highlight");
      window.setTimeout(() => el.classList.remove("search-highlight"), 2200);
    });
  };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div
        className="search-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-label={translate.search.title}
      >
        <div className="search-input-wrapper">
          <FiSearch className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={translate.search.placeholder}
            aria-label={translate.search.placeholder}
          />
          <kbd className="search-esc">Esc</kbd>
        </div>

        <div className="search-results">
          {query.trim() === "" ? (
            <p className="search-empty">{translate.search.hint}</p>
          ) : results.length === 0 ? (
            <p className="search-empty">{translate.search.empty}</p>
          ) : (
            grouped.map((group) => (
              <div key={group.label} className="search-group">
                <h4 className="search-group-title">{group.label}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="search-item"
                        onClick={() => handleSelect(item)}
                      >
                        <span className="search-item-title">{item.title}</span>
                        {item.subtitle && (
                          <span className="search-item-subtitle">
                            {item.subtitle}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
