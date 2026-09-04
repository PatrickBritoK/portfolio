import { experiences } from "../data/experience";
import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";
import "../styles/highlights.css";

function parseYearMonth(value: string): number {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month - 1);
}

function professionalYears(): number {
  const now = new Date();
  const nowIdx = now.getFullYear() * 12 + now.getMonth();
  const totalMonths = experiences
    .filter((exp) => exp.category === "it")
    .reduce((total, exp) => {
      const endIdx = exp.end ? parseYearMonth(exp.end) : nowIdx;
      const startIdx = parseYearMonth(exp.start);
      return total + Math.max(0, endIdx - startIdx);
    }, 0);
  return Math.floor(totalMonths / 12);
}

export default function Highlights() {
  const { translate } = useLanguage();

  const educationItems = translate.education.items as Array<{
    inProgress?: boolean;
  }>;
  const languageItems = translate.languages.items as Array<{
    inProgress?: boolean;
  }>;

  const educationInProgress = educationItems.filter((i) => i.inProgress).length;
  const languagesInProgress = languageItems.filter((i) => i.inProgress).length;

  const items = [
    {
      value: `${professionalYears()}+`,
      label: translate.highlights.yearsExperience,
      note: null,
    },
    {
      value: projects.length,
      label: translate.highlights.projects,
      note: null,
    },
    {
      value: translate.education.items.length,
      label: translate.highlights.education,
      note:
        educationInProgress > 0
          ? `${educationInProgress} ${translate.highlights.inProgress}`
          : null,
    },
    {
      value: translate.languages.items.length,
      label: translate.highlights.languages,
      note:
        languagesInProgress > 0
          ? `${languagesInProgress} ${translate.highlights.inProgress}`
          : null,
    },
  ];

  return (
    <section className="highlights">
      <div className="section-container highlights-grid">
        {items.map((item) => (
          <div key={item.label} className="highlight-card">
            <span className="highlight-value">{item.value}</span>
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
