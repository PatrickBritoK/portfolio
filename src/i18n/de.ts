const de = {
  navigation: {
    label: "Hauptnavigation",
    toggleMenu: "Menü öffnen oder schließen",
    language: "Sprache auswählen",
    home: "Start",
    about: "Über mich",
    technologies: "Technologien",
    projects: "Projekte",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    certifications: "Zertifikate",
    themeToDark: "Dunklen Modus aktivieren",
    themeToLight: "Hellen Modus aktivieren",
    backToTop: "Nach oben",
  },

  about: {
    title: "Über mich",
    text: [
      "Hallo, ich heiße Patrick. Ich bin Full-Stack-Entwickler mit praktischer Erfahrung in Java, React, Vue, Angular und PostgreSQL und arbeite an der Entwicklung von Systemen, Integrationen und geschäftsorientierten Anwendungen.",
      "Ich habe ein starkes Interesse an neuen Technologien und pflege eine kontinuierliche Lernroutine mit dem Ziel, mich technisch weiterzuentwickeln und effiziente, skalierbare und gut strukturierte Lösungen zu liefern.",
      "Ich habe einen MBA in Projektmanagement abgeschlossen, der meinen strategischen Blick, meine Organisation und meine Fähigkeit, ergebnisorientiert zu arbeiten, erweitert hat.",
      "Derzeit nehme ich außerdem am Deutsch- und Englischunterricht teil.",
    ],
  },

  techStack: {
    title: "Technologien",
    professionalLabel: "Beruflicher Einsatz",
    learningLabel: "Lernen / Vertrautheit",
    experienceLabel: "Erfahrung",
    year: "Jahr",
    years: "Jahre",
    month: "Monat",
    months: "Monate",
    and: "und",
    lessThanMonth: "weniger als 1 Monat",
  },

  search: {
    open: "Suchen",
    title: "Suche",
    placeholder: "Nach Technologie, Projekt, Firma suchen...",
    hint: "Tippe, um im gesamten Portfolio zu suchen",
    empty: "Keine Ergebnisse gefunden",
    categories: {
      technology: "Technologien",
      experience: "Berufserfahrung",
      project: "Projekte",
      certification: "Zertifikate",
      education: "Ausbildung",
      language: "Sprachen",
    },
  },

  techLabels: {
    "Clean Architecture": "Clean Architecture",
  } as Record<string, string>,

  highlights: {
    yearsExperience: "Jahre Erfahrung",
    projects: "abgeschlossene Projekte",
    education: "Ausbildungen",
    languages: "Sprachen",
    inProgress: "in Bearbeitung",
    yearShort: "J",
    monthShort: "M",
  },

  hero: {
    subtitle:
      "Full-Stack-Entwickler mit Fokus auf Java, Go, React, Vue und skalierbare Anwendungsarchitekturen.",
    text:
      "Erfahrung in der Entwicklung von APIs, modernen Benutzeroberflächen, REST-Integrationen, relationalen Datenbanken sowie Deployments in Cloud-Umgebungen mit Docker und AWS.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  projects: {
    title: "Ausgewählte Projekte",
    viewProject: "Projekt ansehen",
    items: [
      {
        name: "Modernisierung eines Pharma-Portals",
        description:
          "Migration eines Legacy-Portals auf eine moderne Architektur mit neuen Oberflächen und APIs, Refactorings für Performance und Wartbarkeit sowie kontinuierlicher Produktentwicklung.",
      },
      {
        name: "Unternehmensportal mit mehreren Versionen",
        description:
          "Korrektive und evolutionäre Wartung eines Portals mit mehreren Versionen, einschließlich Fehleranalyse, Problemlösung und Umsetzung von Verbesserungen.",
      },
      {
        name: "Online-Kursportal",
        description:
          "Entwicklung von Oberflächen und dynamischen Diagrammen für eine Lernplattform unter Anwendung von Clean-Architecture-Prinzipien sowie Unterstützung des Go-Backends.",
      },
      {
        name: "Spincare - Home-Care-Management",
        description:
          "Full-Stack-Entwicklung einer Lösung für Home-Care-Abläufe, einschließlich APIs, Benutzeroberflächen sowie Modellierung und Verwaltung der Datenbank.",
      },
      {
        name: "Self-Service-Terminal im Gesundheitswesen",
        description:
          "Entwicklung eines Terminals für Krankenhäuser und Labore mit APIs, Benutzeroberflächen, Datenbankdesign und Integration in das Tasy-System.",
      },
      {
        name: "Event-Management-Plattform",
        description:
          "Entwicklung einer Web- und Mobile-Plattform für Veranstaltungen, einschließlich APIs, Benutzeroberflächen, Zahlungsintegration und Datenpersistenz.",
      },
      {
        name: "Versorgungsindikatoren",
        description:
          "Entwicklung von APIs und Dashboards mit dynamischen Diagrammen zur Visualisierung und Überwachung von Versorgungsindikatoren.",
      },
    ],
  },

  experience: {
    title: "Berufserfahrung",
    tabs: {
      it: "IT",
      other: "Sonstige",
    },
    emptyOther: "Noch keine zusätzliche Erfahrung erfasst.",

    philips: {
      company: "Premiersoft",
      role: "Full-Stack-Entwickler (Mid-Level)",
      period: "12/2025 - Heute",
      contract:
        "Als externer Mitarbeiter beim Kunden Bionexo Tasy (ehemals Philips) eingesetzt. Ich arbeite beim Kunden seit der Philips-Ära und wurde nach der Übernahme durch Bionexo Tasy weiterbeschäftigt.",
      description: `
Unternehmensportal mit mehreren Versionen
- Behebung von Bugs und Inkonsistenzen zwischen Versionen
- Wartung und Weiterentwicklung bestehender Funktionen
- Untersuchung und Behebung von Systemproblemen
- Umsetzung von Anpassungen und Verbesserungen gemäß den Projektanforderungen

Migration eines Legacy-Pharma-Portals
- Migration und Modernisierung eines Legacy-Portals im pharmazeutischen Bereich
- Entwicklung von Benutzeroberflächen mit React
- Erstellung und Wartung von APIs in Java
- Refactoring von Code zur Verbesserung von Performance und Wartbarkeit
- Fehlerbehebung und Implementierung neuer Funktionen
- Arbeit mit Oracle-Datenbanken in einer Unternehmensumgebung
`,
    },

    lince: {
      company: "Lince Tech",
      role: "Full-Stack-Entwickler",
      period: "11/2024 - 11/2025",
      contract: "",
      description: `
- Entwicklung eines Kursportals mit Vue
- Entwicklung von Benutzeroberflächen und UI-Komponenten
- Erstellung von Dashboards und dynamischen Diagrammen
- Anwendung von Clean-Architecture-Prinzipien
- Unterstützung bei der Backend-Entwicklung in Golang
`,
    },

    pulsati: {
      company: "Pulsati",
      role: "Full-Stack-Entwickler",
      period: "01/2023 - 11/2024",
      contract: "",
      description: `
Projekt Spincare - (Home Care)
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

    example: {
      company: "Beispiel — bearbeiten oder entfernen",
      role: "Ihre Rolle",
      period: "01/2020 - 12/2020",
      contract: "",
      description: `
- Dies ist ein Beispielelement für Erfahrungen außerhalb der IT
- Bearbeiten Sie es in src/i18n/*.ts (Schlüssel "example")
- Zum Entfernen löschen Sie dieses Element und das entsprechende in src/data/experience.ts
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
        period: "Abgeschlossen im Oktober 2025",
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
        period: "Abgeschlossen im Februar 2026",
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
        inProgress: true,
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

  certifications: {
    title: "Zertifikate",
    viewCredential: "Zertifikat ansehen",
    items: [
      {
        title: "AWS Partner: Accreditation (Technical)",
        institution: "Amazon Web Services (AWS)",
        period: "Ausgestellt im Aug. 2026",
        techs: ["AWS", "Cloud Computing", "Architektur"],
      },
      {
        title: "AWS Technical Essentials",
        institution: "Amazon Web Services (AWS)",
        period: "Ausgestellt im Aug. 2026",
        techs: ["AWS", "Cloud Computing", "AWS-Grundlagen"],
      },
      {
        title: "Hexagonale Architektur / Ports and Adapters",
        institution: "Udemy",
        period: "Ausgestellt im Okt. 2024",
        techs: ["Architektur", "Java", "Systemdesign"],
      },
      {
        title: "Kompletter API-Kurs mit Node.js, Express, MongoDB und SQL",
        institution: "Udemy",
        period: "Ausgestellt im Mai 2024",
        techs: ["Node.js", "Express", "MongoDB", "SQL", "REST API"],
      },
      {
        title: "SAP TO WORK",
        institution: "AC International Group",
        period: "Ausgestellt im Juni 2024",
        techs: ["SAP"],
      },
    ],
  },

  footer: {
    rights: "Alle Rechte vorbehalten.",
  },

  notFound: {
    title: "Seite nicht gefunden",
    text:
      "Der Link existiert nicht oder wurde verschoben. Kehre zur Startseite zurück und erkunde weiter.",
    back: "Zurück zur Startseite",
  },

  accessibility: {
    open: "Barrierefreiheit",
    title: "Barrierefreiheits-Optionen",
    skipToContent: "Zum Inhalt springen",
    fontSizeLabel: "Schriftgröße",
    fontSizes: {
      small: "Klein",
      normal: "Standard",
      large: "Groß",
      xlarge: "Sehr groß",
    },
    highContrast: "Hoher Kontrast",
    reduceMotion: "Animationen reduzieren",
    textSpacing: "Abstände erhöhen",
    underlineLinks: "Links unterstreichen",
    colorFilterLabel: "Farbunterstützung",
    colorFilterHint:
      "Filter, die Menschen mit unterschiedlichen Formen von Farbfehlsichtigkeit helfen.",
    colorFilters: {
      none: "Keiner",
      protanopia: "Protanopie",
      deuteranopia: "Deuteranopie",
      tritanopia: "Tritanopie",
      achromatopsia: "Ohne Farbe",
    },
    reset: "Standard wiederherstellen",
  },

  languages: {
    title: "Sprachen",
    items: [
      { name: "Portugiesisch", level: "Fließend / Muttersprache" },
      { name: "Spanisch", level: "Mittelstufe" },
      { name: "Englisch", level: "Grundkenntnisse / Mittelstufe (in Ausbildung)", inProgress: true },
      { name: "Deutsch", level: "Anfänger (in Ausbildung)", inProgress: true },
    ],
  },
};

export default de;
