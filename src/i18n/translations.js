export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      experiences: 'Expériences',
      transformation: 'Transformation digitale',
      expertise: 'Expertise',
      contact: 'Contact',
      downloadCv: 'Télécharger le CV',
    },
    hero: {
      badge: 'Transformation digitale · Paiement & Fintech',
      title: 'Consultant en transformation digitale',
      tagline:
        "J'accompagne les entreprises de l'idée jusqu'à la mise en place concrète de solutions numériques, pour les rendre plus modernes et plus efficaces.",
      stats: [
        { value: '4+', label: 'ans en paiement & digital' },
        { value: '2', label: 'grands groupes bancaires' },
        { value: 'Paris', label: 'France' },
      ],
      ctaPrimary: 'Découvrir mon parcours',
      ctaSecondary: 'Me contacter',
      ctaDownload: 'Télécharger mon CV',
    },
    valueFlow: ['Comprendre', 'Structurer', 'Concevoir', 'Digitaliser', 'Automatiser', 'Déployer', 'Améliorer'],
    about: {
      eyebrow: 'À propos',
      title: 'Le lien entre le besoin métier et la solution digitale',
      lead: "L'objectif n'est pas simplement de faire de l'informatique. L'objectif est de rendre l'entreprise plus moderne, plus organisée et plus efficace grâce au numérique.",
      body: "Consultant en transformation digitale et paiement, j'interviens depuis l'identification du besoin jusqu'à l'amélioration continue de la solution : je comprends une activité, j'identifie ce qui peut être digitalisé ou automatisé, je conçois une réponse concrète et j'accompagne sa mise en place. Le développement est un moyen — la transformation de l'entreprise est l'objectif.",
      steps: ['Identifier le besoin', 'Concevoir la solution', 'Réaliser', 'Tester', 'Déployer', 'Améliorer'],
    },
    bring: {
      eyebrow: "Ce que j'apporte",
      title: 'Transformer une idée en solution digitale',
      subtitle:
        "Digitaliser un processus, automatiser une tâche répétitive, ou construire un produit digital — l'approche part toujours du même endroit : comprendre le besoin métier.",
      cards: [
        {
          title: 'Digitalisation des processus',
          text: "Ce qui est aujourd'hui fait sur papier, dans Excel ou manuellement peut souvent être transformé en processus numérique : présence, congés, facturation, stocks, commandes, suivi client, validation interne, archivage.",
        },
        {
          title: 'Applications',
          text: "Conception d'applications internes ou clients : outils commerciaux, applications de réservation, outils de suivi, applications intégrant le paiement.",
        },
        {
          title: 'SaaS',
          text: "Une idée peut devenir un produit digital accessible depuis un navigateur, utilisable par plusieurs utilisateurs et potentiellement commercialisable sous forme d'abonnement.",
        },
        {
          title: 'Sites internet',
          text: 'Un site pensé comme un outil business : visibilité, crédibilité, acquisition, demandes de devis, génération de prospects — pas une simple vitrine.',
        },
      ],
      automation: {
        title: 'Automatisation',
        subtitle: 'Réduire les tâches manuelles et centraliser l\'information.',
        beforeLabel: 'Avant',
        before: 'Papier → Excel → saisie manuelle → vérification → reporting',
        afterLabel: 'Après',
        after: 'Application → données centralisées → automatisation → tableau de bord',
        tags: ['Gain de temps', "Moins d'erreurs", 'Centralisation', 'Visibilité'],
      },
    },
    experience: {
      eyebrow: 'Parcours',
      title: 'Expériences professionnelles',
      items: [
        {
          company: 'BNP Paribas',
          role: 'Chef de produit, solution de paiement',
          period: "Mai 2026 — Aujourd'hui",
          location: 'Paris, France',
          summary:
            "Pilotage du déploiement d'une nouvelle solution de paiement pour les clients de la banque, de la coordination des équipes jusqu'à la mise en production.",
          points: [
            "Pilotage du déploiement d'une nouvelle solution de paiement",
            'Coordination entre les équipes métier et techniques',
            "Suivi de la mise en place jusqu'aux clients de la banque",
          ],
          tags: ['Produit', 'Paiement', 'Déploiement'],
        },
        {
          company: 'BoursoBank',
          role: 'Consultant paiement',
          period: 'Janvier 2025 — Février 2026',
          location: 'Paris, France',
          summary:
            'Étude et recommandations sur les nouveaux moyens de paiement digitaux : tokenisation, acquisition et benchmark des processeurs de paiement.',
          points: [
            "Étude approfondie de la tokenisation (Apple Pay, Google Pay) et recommandations sur l'évolution des outils",
            "Analyse des modalités d'acquisition des flux monétiques et des règles Visa / Mastercard par marché",
            'Benchmark des processeurs de paiement et recommandations de renégociation',
          ],
          tags: ['Paiement', 'Fintech', 'Étude & recommandations'],
        },
        {
          company: 'BNP Paribas',
          role: 'Business Analyst en paiement',
          period: 'Septembre 2021 — Décembre 2024',
          location: 'Paris, France',
          summary:
            'Analyse et amélioration des solutions de paiement par carte bancaire : recensement des flux monétiques, étude des outils de fraude et des besoins des banques clientes.',
          points: [
            'Recensement et analyse des flux monétiques (acquiring, issuing, fraude)',
            "Étude de l'outil de fraude interne et comparaison avec des solutions externes",
            'Analyse des besoins et processus monétiques des banques clientes',
          ],
          tags: ['Business Analysis', 'Monétique', 'Recommandations'],
        },
        {
          company: 'Buzzit',
          role: 'Développeur Web — Stage Erasmus',
          period: 'Juin 2019 — Octobre 2019',
          location: 'Wrocław, Pologne',
          summary:
            "Première expérience concrète de conception web : création et maintenance d'un site internet pour un client, de l'analyse du besoin aux tests finaux.",
          points: ['Analyse du besoin client', 'Création et maintenance du site internet', 'Tests finaux avant mise en ligne'],
          tags: ['Développement web', 'Analyse du besoin'],
        },
      ],
    },
    transformation: {
      eyebrow: 'Méthodologie',
      title: "De l'idée à la solution",
      subtitle:
        "Sept étapes pour transformer un besoin métier, un processus existant ou une idée en solution digitale opérationnelle.",
      steps: [
        { n: '01', title: 'Comprendre', text: "Comprendre l'activité, les utilisateurs et les problèmes." },
        { n: '02', title: 'Identifier', text: 'Identifier les tâches manuelles, les irritants et les opportunités.' },
        { n: '03', title: 'Concevoir', text: 'Définir la solution, les fonctionnalités et les parcours.' },
        { n: '04', title: 'Construire', text: 'Coordonner ou réaliser la solution digitale.' },
        { n: '05', title: 'Tester', text: "Valider le fonctionnement et l'expérience utilisateur." },
        { n: '06', title: 'Déployer', text: 'Mettre la solution en production et accompagner les utilisateurs.' },
        { n: '07', title: 'Améliorer', text: 'Analyser les retours et faire évoluer le produit.' },
      ],
    },
    paymentExpertise: {
      eyebrow: 'Expertise complémentaire',
      title: 'Une expertise digitale renforcée par le paiement',
      body: 'Plusieurs années passées au cœur des systèmes de paiement de grands acteurs bancaires — une expertise différenciante qui vient renforcer chaque projet de transformation digitale.',
      skills: [
        'Cartes bancaires',
        'Paiement en ligne & sans contact',
        'Wallets digitaux',
        'Tokenisation & X-Pay (Apple Pay, Google Pay)',
        'Émission & acquisition',
        'Compensation & règlement',
        'Flux monétiques',
        'Services Visa (VAU, VSM, VAP, AVS)',
        'Outils de lutte contre la fraude',
        'Fintech',
      ],
    },
    skills: {
      eyebrow: 'Compétences',
      title: "Un profil à l'intersection du métier, du digital et du paiement",
      categories: [
        {
          title: 'Transformation digitale',
          items: ['Digitalisation des processus', 'Automatisation', 'Conception de solutions digitales', 'Transformation des besoins métier'],
        },
        {
          title: 'Produit & Business Analysis',
          items: ['Business Analysis', 'Recueil des besoins', 'Analyse fonctionnelle', 'Recommandations', 'Gestion de projet', 'Conception produit'],
        },
        {
          title: 'Digital',
          items: ['Applications web', 'Applications mobiles', 'SaaS', 'Outils de gestion', 'Tableaux de bord'],
        },
        {
          title: 'Paiement',
          items: ['Monétique', 'Cartes', 'Paiement en ligne', 'Wallets', 'Tokenisation', 'Fintech'],
        },
      ],
    },
    education: {
      eyebrow: 'Formation',
      title: 'Parcours académique',
      items: [
        { school: 'ENSICAEN', degree: "Diplôme d'ingénieur en cybersécurité et e-paiement", period: '2021 — 2024', location: 'Caen' },
        { school: 'EM Normandie Business School', degree: 'Diplôme de Master en Management', period: '2022 — 2024', location: 'Caen' },
        { school: 'Ledra College', degree: 'BAC+2 en sciences informatiques', period: '2018 — 2020', location: 'Nicosie, Chypre' },
        { school: 'Groupe Scolaire Mont Amba', degree: 'Baccalauréat scientifique', period: '2011 — 2017', location: 'Kinshasa, RDC' },
      ],
      langLabel: 'Langues',
      languages: [
        { name: 'Français', level: 'Langue native' },
        { name: 'Anglais', level: 'B2 — TOEIC' },
        { name: 'Lingala', level: 'Langue native' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Un besoin digital ? Parlons-en.',
      body: "Une idée, un processus à digitaliser ou un produit à construire ? Échangeons sur la manière de le transformer en solution concrète.",
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'vous@exemple.com',
        message: 'Message',
        messagePlaceholder: 'Décrivez votre besoin en quelques lignes',
        submit: 'Envoyer le message',
        sending: 'Envoi en cours…',
        success: 'Ton client mail va s\'ouvrir avec le message pré-rempli.',
        error: 'Merci de remplir tous les champs correctement.',
        note: "L'envoi ouvre votre messagerie, prête à partir vers",
      },
    },
    footer: {
      eyebrow: 'Contact',
      headline: 'Un projet à digitaliser ?',
      headline2: 'Parlons-en.',
      cta: 'Me contacter',
      copyright: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experiences: 'Experience',
      transformation: 'Digital Transformation',
      expertise: 'Expertise',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      badge: 'Digital Transformation · Payments & Fintech',
      title: 'Digital Transformation Consultant',
      tagline:
        'I help companies go from idea to concrete digital solutions — making them more modern and more efficient.',
      stats: [
        { value: '4+', label: 'years in payments & digital' },
        { value: '2', label: 'major banking groups' },
        { value: 'Paris', label: 'France' },
      ],
      ctaPrimary: 'See my background',
      ctaSecondary: 'Get in touch',
      ctaDownload: 'Download my CV',
    },
    valueFlow: ['Understand', 'Structure', 'Design', 'Digitize', 'Automate', 'Deploy', 'Improve'],
    about: {
      eyebrow: 'About',
      title: 'The link between business needs and digital solutions',
      lead: "The goal isn't simply doing IT. The goal is making the company more modern, more organized and more efficient through digital.",
      body: 'As a digital transformation and payments consultant, I work from identifying a need through to continuously improving the solution: I understand an activity, identify what can be digitized or automated, design a concrete answer, and support its rollout. Development is a means — transforming the business is the goal.',
      steps: ['Identify the need', 'Design the solution', 'Build', 'Test', 'Deploy', 'Improve'],
    },
    bring: {
      eyebrow: 'What I bring',
      title: 'Turning an idea into a digital solution',
      subtitle:
        'Digitizing a process, automating a repetitive task, or building a digital product — the approach always starts in the same place: understanding the business need.',
      cards: [
        {
          title: 'Digitizing processes',
          text: "What's still done on paper, in Excel, or manually can often be turned into a digital process: attendance, leave, invoicing, stock, orders, customer follow-up, internal approval, archiving.",
        },
        {
          title: 'Applications',
          text: 'Designing internal or customer-facing apps: sales tools, booking apps, tracking tools, apps that embed payment.',
        },
        {
          title: 'SaaS',
          text: 'An idea can become a digital product accessible from a browser, usable by multiple users, and potentially sold as a subscription.',
        },
        {
          title: 'Websites',
          text: 'A website designed as a business tool: visibility, credibility, acquisition, quote requests, lead generation — not just a showcase.',
        },
      ],
      automation: {
        title: 'Automation',
        subtitle: 'Cutting manual work and centralizing information.',
        beforeLabel: 'Before',
        before: 'Paper → Excel → manual entry → checking → reporting',
        afterLabel: 'After',
        after: 'App → centralized data → automation → dashboard',
        tags: ['Time saved', 'Fewer errors', 'Centralization', 'Visibility'],
      },
    },
    experience: {
      eyebrow: 'Background',
      title: 'Professional experience',
      items: [
        {
          company: 'BNP Paribas',
          role: 'Product Manager, Payment Solution',
          period: 'May 2026 — Present',
          location: 'Paris, France',
          summary:
            'Leading the rollout of a new payment solution for the bank\'s customers, from cross-team coordination through to production.',
          points: [
            'Led the rollout of a new payment solution',
            'Coordinated business and technical teams',
            'Oversaw delivery through to the bank\'s customers',
          ],
          tags: ['Product', 'Payments', 'Rollout'],
        },
        {
          company: 'BoursoBank',
          role: 'Payments Consultant',
          period: 'January 2025 — February 2026',
          location: 'Paris, France',
          summary:
            'Research and recommendations on new digital payment methods: tokenization, acquiring, and payment processor benchmarking.',
          points: [
            'In-depth study of tokenization (Apple Pay, Google Pay) and recommendations on tooling evolution',
            'Analysis of card-flow acquiring arrangements and Visa / Mastercard rules by market',
            'Benchmark of payment processors and renegotiation recommendations',
          ],
          tags: ['Payments', 'Fintech', 'Research & recommendations'],
        },
        {
          company: 'BNP Paribas',
          role: 'Payments Business Analyst',
          period: 'September 2021 — December 2024',
          location: 'Paris, France',
          summary:
            'Analysis and improvement of card payment solutions: mapping card-payment flows, reviewing fraud tools, and assessing client banks\' needs.',
          points: [
            'Mapped and analyzed card-payment flows (acquiring, issuing, fraud)',
            'Reviewed the internal fraud tool and benchmarked it against external solutions',
            'Analyzed client banks\' needs and card-payment processes',
          ],
          tags: ['Business Analysis', 'Card Payments', 'Recommendations'],
        },
        {
          company: 'Buzzit',
          role: 'Web Developer — Erasmus Internship',
          period: 'June 2019 — October 2019',
          location: 'Wrocław, Poland',
          summary:
            'First hands-on web project: built and maintained a website for a client, from requirements gathering through to final testing.',
          points: ['Client requirements gathering', 'Website build and maintenance', 'Final testing before launch'],
          tags: ['Web Development', 'Requirements Analysis'],
        },
      ],
    },
    transformation: {
      eyebrow: 'Methodology',
      title: 'From idea to solution',
      subtitle: 'Seven steps to turn a business need, an existing process, or an idea into a working digital solution.',
      steps: [
        { n: '01', title: 'Understand', text: 'Understand the business, its users, and their problems.' },
        { n: '02', title: 'Identify', text: 'Identify manual tasks, pain points, and opportunities.' },
        { n: '03', title: 'Design', text: 'Define the solution, its features, and user journeys.' },
        { n: '04', title: 'Build', text: 'Coordinate or build the digital solution.' },
        { n: '05', title: 'Test', text: 'Validate functionality and user experience.' },
        { n: '06', title: 'Deploy', text: 'Ship the solution to production and support users.' },
        { n: '07', title: 'Improve', text: 'Analyze feedback and evolve the product.' },
      ],
    },
    paymentExpertise: {
      eyebrow: 'Complementary expertise',
      title: 'Digital expertise reinforced by payments',
      body: "Several years spent at the core of major banking players' payment systems — a differentiating expertise that strengthens every digital transformation project.",
      skills: [
        'Bank cards',
        'Online & contactless payment',
        'Digital wallets',
        'Tokenization & X-Pay (Apple Pay, Google Pay)',
        'Issuing & acquiring',
        'Clearing & settlement',
        'Payment flows',
        'Visa services (VAU, VSM, VAP, AVS)',
        'Fraud prevention tools',
        'Fintech',
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A profile at the intersection of business, digital, and payments',
      categories: [
        {
          title: 'Digital Transformation',
          items: ['Process digitization', 'Automation', 'Digital solution design', 'Turning business needs into solutions'],
        },
        {
          title: 'Product & Business Analysis',
          items: ['Business Analysis', 'Requirements gathering', 'Functional analysis', 'Recommendations', 'Project management', 'Product design'],
        },
        {
          title: 'Digital',
          items: ['Web apps', 'Mobile apps', 'SaaS', 'Management tools', 'Dashboards'],
        },
        {
          title: 'Payments',
          items: ['Card payments', 'Cards', 'Online payment', 'Wallets', 'Tokenization', 'Fintech'],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      items: [
        { school: 'ENSICAEN', degree: 'Engineering degree in Cybersecurity and e-Payment', period: '2021 — 2024', location: 'Caen, France' },
        { school: 'EM Normandie Business School', degree: "Master's degree in Management", period: '2022 — 2024', location: 'Caen, France' },
        { school: 'Ledra College', degree: 'Foundation degree in Computer Science', period: '2018 — 2020', location: 'Nicosia, Cyprus' },
        { school: 'Groupe Scolaire Mont Amba', degree: 'Scientific Baccalaureate', period: '2011 — 2017', location: 'Kinshasa, DRC' },
      ],
      langLabel: 'Languages',
      languages: [
        { name: 'French', level: 'Native' },
        { name: 'English', level: 'B2 — TOEIC' },
        { name: 'Lingala', level: 'Native' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "A digital need? Let's talk.",
      body: "An idea, a process to digitize, or a product to build? Let's discuss how to turn it into a concrete solution.",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        message: 'Message',
        messagePlaceholder: 'Describe your need in a few lines',
        submit: 'Send message',
        sending: 'Sending…',
        success: 'Your mail client will open with the message pre-filled.',
        error: 'Please fill in every field correctly.',
        note: 'Sending opens your mail client, ready to go to',
      },
    },
    footer: {
      eyebrow: 'Contact',
      headline: 'A project to digitize?',
      headline2: "Let's talk.",
      cta: 'Get in touch',
      copyright: 'All rights reserved.',
    },
  },
}
