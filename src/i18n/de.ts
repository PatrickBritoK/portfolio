const de = {
  hero: {
    subtitle:
      "Full-Stack-Entwickler mit Fokus auf Java, Go, React, Vue und skalierbare Anwendungsarchitekturen.",
    text:
      "Erfahrung in der Entwicklung von APIs, modernen Benutzeroberflächen, REST-Integrationen, relationalen Datenbanken sowie Deployments in Cloud-Umgebungen mit Docker und AWS.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  experience: {
    title: "Berufserfahrung",

    philips: {
      role: "Full-Stack-Entwickler (Mid-Level)",
      description: `
- Migration und Modernisierung eines Legacy-Portals im pharmazeutischen Bereich
- Entwicklung von Benutzeroberflächen mit React
- Erstellung und Wartung von APIs in Java
- Refactoring von Code zur Verbesserung von Performance und Wartbarkeit
- Fehlerbehebung und Implementierung neuer Funktionen
- Arbeit mit Oracle-Datenbanken in einer Unternehmensumgebung
`,
    },

    lince: {
      role: "Full-Stack-Entwickler",
      description: `
- Entwicklung eines Kursportals mit Vue
- Entwicklung von Benutzeroberflächen und UI-Komponenten
- Erstellung von Dashboards und dynamischen Diagrammen
- Anwendung von Clean-Architecture-Prinzipien
- Unterstützung bei der Backend-Entwicklung in Golang
`,
    },

    pulsati: {
      role: "Full-Stack-Entwickler",
      description: `
Projekt Spincare (Home Care)
- Entwicklung von APIs mit Java
- Entwicklung der Benutzeroberfläche mit Angular
- Implementierung und Verwaltung der PostgreSQL-Datenbank

Self-Service-Terminal für Krankenhäuser und Labore
- Entwicklung von APIs mit Java
- Entwicklung der Benutzeroberfläche mit React
- Implementierung von Tabellen und Datenbankverwaltung
- Integration mit dem Krankenhausinformationssystem Tasy

Event-Management-System
- Entwicklung von APIs und Geschäftslogik
- Entwicklung der Weboberfläche mit React
- Integration eines Zahlungssystems
- Implementierung und Verwaltung der PostgreSQL-Datenbank

Versorgungsindikatoren
- Entwicklung von APIs mit Java
- Erstellung von Dashboards und dynamischen Diagrammen
- Entwicklung der Benutzeroberfläche mit React

Tasy-Beratung
- Mitarbeit im Migrationsprozess zu Tasy HTML5
`,
    },
  },

  education: {
    title: "Ausbildung",
    showDetails: "Details anzeigen",
    hideDetails: "Details ausblenden",
    items: [
      {
        course: "Technologiestudium in Systemanalyse und Softwareentwicklung",
        period: "Abgeschlossen im Juli 2024",
        subjects: [
          { name: "Softwaremodellierung", hours: 160 },
          { name: "Programmierung von Computerlösungen", hours: 160 },
          { name: "Computersysteme und Konnektivität", hours: 160 },
          { name: "Computersysteme und Sicherheit", hours: 160 },
          { name: "Softwaremanagement und -qualität", hours: 160 },
          { name: "Software Engineering", hours: 160 },
          { name: "Verteilte Systeme und Mobile Entwicklung", hours: 160 },
          { name: "Usability und Webentwicklung", hours: 160 },
        ],
      },
      {
        course: "MBA in Projektmanagement",
        period: "Voraussichtlicher Abschluss im Oktober 2025",
        subjects: [
          { name: "Grundlagen des Managements", hours: 40 },
          { name: "Strategisches Management", hours: 40 },
          { name: "Finanzmanagement", hours: 40 },
          { name: "Entwicklung von Unternehmensprojekten", hours: 40 },
          { name: "Businessplan-Erstellung", hours: 40 },
          { name: "Grundlagen und integriertes Projektmanagement", hours: 40 },
          { name: "Scope-, Zeit- und Kostenmanagement in Projekten", hours: 40 },
          { name: "Führung und Teammanagement", hours: 40 },
          { name: "Kommunikations-, Risiko- und Beschaffungsmanagement", hours: 40 },
          { name: "Stakeholdermanagement und IT-Werkzeuge", hours: 40 },
          { name: "Zentrale Themen des Projektmanagements", hours: 40 },
        ],
      },
      {
        course: "Postgraduiertenstudium in Meeresbiologie",
        period: "Voraussichtlicher Abschluss im Februar 2026",
        subjects: [
          { name: "Berufliche Entwicklung", hours: 40 },
          { name: "Marine und Küstenökosysteme", hours: 40 },
          { name: "Küstenmanagement", hours: 60 },
          { name: "Marine Wirbeltiere", hours: 60 },
          { name: "Meeresverschmutzung und Umweltverträglichkeitsprüfung", hours: 40 },
          { name: "Umweltrecht, Umweltlizenzierung und Umweltmanagement", hours: 60 },
          { name: "Marine Wirbellose", hours: 60 },
          { name: "Allgemeine Grundlagen und Marine Ökologie", hours: 40 },
        ],
      },
      {
        course: "Bachelorstudium in Biologischen Wissenschaften",
        period: "Voraussichtlicher Abschluss im Jahr 2028",
        subjects: [
          { name: "Digitale Einführung", hours: 20 },
          { name: "Menschliche Anatomie", hours: 40 },
          { name: "Integrierte Kompetenzbewertung in den Biowissenschaften", hours: 0 },
          { name: "Brasilianische Gebärdensprache", hours: 40 },
          { name: "Pflanzenmorphologie", hours: 80 },
          { name: "Karriereentwicklungsplan in den Biowissenschaften", hours: 10 },
          { name: "Integrierte Kompetenzbewertung in den Biowissenschaften I", hours: 0 },
          { name: "Biostatistik", hours: 40 },
          { name: "Grundlagen der Geologie und Paläontologie", hours: 40 },
          { name: "Brasilianische Gebärdensprache II", hours: 40 },
          { name: "Grundlagen der Umwelt- und Mikrobiologie", hours: 80 },
          { name: "Karriereentwicklungsplan in den Biowissenschaften I", hours: 10 },
          { name: "Zoologie der Wirbellosen", hours: 80 },
          { name: "Zoologie der Wirbeltiere", hours: 80 }
        ]
      },
    ],
  },

  languages: {
    title: "Sprachen",
    items: [
      { name: "Portugiesisch", level: "Fließend / Muttersprache" },
      { name: "Spanisch", level: "Mittelstufe" },
      { name: "Englisch", level: "Grundkenntnisse / Mittelstufe (in Ausbildung)" },
      { name: "Deutsch", level: "Anfänger (in Ausbildung)" },
    ],
  },
};

export default de;