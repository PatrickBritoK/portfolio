import { techstack } from "../data/techstack";
import { experiences } from "../data/experience";
import { useLanguage } from "../context/useLanguage";
import "../styles/techstack.css";

function parseYearMonth(value: string): number {
  const [year, month] = value.split("-").map(Number);
  return year * 12 + (month - 1);
}

function monthsBetween(start: string, end: string | null): number {
  const startIdx = parseYearMonth(start);
  const now = new Date();
  const endIdx = end
    ? parseYearMonth(end)
    : now.getFullYear() * 12 + now.getMonth();
  return Math.max(0, endIdx - startIdx);
}

function getMonthsForTech(techName: string, aliases: string[] = []): number {
  const names = new Set([techName.toLowerCase(), ...aliases.map((a) => a.toLowerCase())]);
  return experiences.reduce((total, exp) => {
    const matches = exp.techs.some((t) => names.has(t.toLowerCase()));
    return matches ? total + monthsBetween(exp.start, exp.end) : total;
  }, 0);
}

export default function TechStack() {
  const { translate } = useLanguage();
  const t = translate.techStack;

  const formatDuration = (totalMonths: number): string => {
    if (totalMonths <= 0) return t.lessThanMonth;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const yearsPart = years > 0 ? `${years} ${years === 1 ? t.year : t.years}` : "";
    const monthsPart =
      months > 0 ? `${months} ${months === 1 ? t.month : t.months}` : "";
    if (yearsPart && monthsPart) return `${yearsPart} ${t.and} ${monthsPart}`;
    return yearsPart || monthsPart;
  };

  return (
    <section id="tecnologias">
      <div className="section-container">
        <h2>{t.title}</h2>

        <div className="stack-grid">
          {techstack.map((tech) => {
            const Icon = tech.icon;
            const months = getMonthsForTech(tech.name, tech.aliases);
            const tooltip =
              months > 0 ? `${t.experienceLabel}: ${formatDuration(months)}` : null;

            return (
              <div
                key={tech.name}
                className="stack-item"
                style={{ "--tech-color": tech.color } as React.CSSProperties}
                aria-label={tooltip ?? undefined}
              >
                <Icon className="stack-icon" style={{ color: tech.color }} />
                <p>{tech.name}</p>
                {tooltip && <span className="stack-tooltip">{tooltip}</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
