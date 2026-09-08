import { useEffect, useRef, useState } from "react";
import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";
import "../styles/highlights.css";

function parseYearMonth(value: string): number {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month - 1);
}

function professionalDuration(): { years: number; months: number } {
  const now = new Date();
  const nowIdx = now.getFullYear() * 12 + now.getMonth();
  const totalMonths = experiences
    .filter((exp) => exp.category === "it")
    .reduce((total, exp) => {
      const endIdx = exp.end ? parseYearMonth(exp.end) : nowIdx;
      const startIdx = parseYearMonth(exp.start);
      return total + Math.max(0, endIdx - startIdx);
    }, 0);
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
}

const ANIMATION_DURATION = 1200;

export default function Highlights() {
  const { translate } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const raw = Math.min(elapsed / ANIMATION_DURATION, 1);
            const eased = 1 - Math.pow(1 - raw, 3);
            setProgress(eased);
            if (raw < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const educationItems = translate.education.items as Array<{
    inProgress?: boolean;
  }>;
  const languageItems = translate.languages.items as Array<{
    inProgress?: boolean;
  }>;

  const educationInProgress = educationItems.filter((i) => i.inProgress).length;
  const languagesInProgress = languageItems.filter((i) => i.inProgress).length;

  const duration = professionalDuration();
  const yearsCount = Math.round(duration.years * progress);
  const monthsCount = Math.round(duration.months * progress);

  const items = [
    {
      value: `${yearsCount}${translate.highlights.yearShort} ${monthsCount}${translate.highlights.monthShort}`,
      label: translate.highlights.yearsExperience,
      note: null,
      compact: true,
    },
    {
      value: `${Math.round(projects.length * progress)}`,
      label: translate.highlights.projects,
      note: null,
      compact: false,
    },
    {
      value: `${Math.round(translate.education.items.length * progress)}`,
      label: translate.highlights.education,
      note:
        educationInProgress > 0
          ? `${educationInProgress} ${translate.highlights.inProgress}`
          : null,
      compact: false,
    },
    {
      value: `${Math.round(translate.languages.items.length * progress)}`,
      label: translate.highlights.languages,
      note:
        languagesInProgress > 0
          ? `${languagesInProgress} ${translate.highlights.inProgress}`
          : null,
      compact: false,
    },
  ];

  return (
    <section className="highlights" ref={sectionRef}>
      <div className="section-container highlights-grid">
        {items.map((item) => (
          <div key={item.label} className="highlight-card">
            <span
              className={`highlight-value ${item.compact ? "compact" : ""}`}
            >
              {item.value}
            </span>
            <span className="highlight-label">{item.label}</span>
            <span className="highlight-note" aria-hidden={!item.note}>
              {item.note ?? "\u00A0"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

