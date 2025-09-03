// Interfejsy dla tłumaczeń Focus Electro

export interface HeroTranslations {
  subtitle: string;
  ctaWork: string;
  ctaCooperation: string;
  description: string;
}

export interface AboutTranslations {
  services: {
    title: string;
    description: string;
  }[];
}

export interface ProcessTranslations {
  philosophy: {
    title: string;
    subtitle: string;
    description: string;
  };
  steps: {
    title: string;
    description: string;
  }[];
}

export interface ProjectsTranslations {
  subtitle: string;
  title: string;
  description: string;
  projects: {
    name: string;
    role: string;
  }[];
}

export interface StatsTranslations {
  descriptions: string[];
  values: {
    experience: string;
  };
}

export interface CallToActionTranslations {
  title: string;
  subtitle: string;
  button: string;
}

export interface FooterTranslations {
  companyName: string;
  credits: string;
}

export interface NavigationTranslations {
  companyName: string;
  menu: {
    home: string;
    about: string;
    career: string;
    cooperation: string;
    contact: string;
  };
  projects: string;
  login: string;
  language: string;
}

export interface AboutPageTranslations {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
      timeline: {
      title: string;
      items: {
        year: string;
        title: string;
        description: string;
      }[];
      timelineData: {
        year: string;
        description: string;
        progress: number;
      }[];
    };
  career: {
    title: string;
    description: string;
  };
      team: {
      title: string;
      description: string;
      subtitle: string;
      mainTitle: string;
      mainDescription: string;
    };
      professionalism: {
      title: string;
      description: string;
      mainTitle: string;
    };
}

export interface CareerPageTranslations {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  values: {
    title: string;
    mainTitle: string;
    mainDescription: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  pillars: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  standards: {
    title: string;
    description: string;
    subtitle: string;
    mainTitle: string;
    mainDescription: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

export interface CareerSectionTranslations {
  subtitle: string;
  title: string;
  description: string;
  careerOptions: {
    title: string;
    description: string;
  }[];
}

export interface CooperationPageTranslations {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  coWorkOptions: {
    title: string;
    subtitle: string;
    mainTitle: string;
    mainDescription: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    description: string;
  };
  filary: {
    subtitle: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

export interface ContactPageTranslations {
  hero: {
    title: string;
    subtitle: string;
    subtitle2: string;
    mainTitle: string;
    description: string;
    tabs: {
      contact: string;
      recruitment: string;
    };
    form: {
      firstName: string;
      lastName: string;
      email: string;
      company: string;
      phone: string;
      message: string;
      dataProcessing: string;
      submit: string;
      sending: string;
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        company: string;
        phone: string;
        message: string;
      };
      messages: {
        dataProcessingRequired: string;
        success: string;
        error: string;
      };
    };
  };
}

export interface ProjectsPageTranslations {
  maps: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
  };
  table: {
    title: string;
    headers: string[];
  };
}

export interface ImageSectionTranslations {
  subtitle: string;
  title: string;
  description: string;
}

export interface DarkImageSectionTranslations {
  subtitle: string;
  title: string;
  description: string;
}

export interface ImageSection2Translations {
  subtitle: string;
  title: string;
  description: string;
}

export interface ProjectsMapsSectionTranslations {
  subtitle: string;
  title: string;
  description: string;
}

export interface MetadataTranslations {
  home: {
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  career: {
    title: string;
    description: string;
  };
  cooperation: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
  };
}

export interface AboutSectionTranslations {
  subtitle: string;
  title: string;
  description: string;
}

export interface Translations {
  hero: HeroTranslations;
  about: AboutTranslations;
  aboutSection: AboutSectionTranslations;
  process: ProcessTranslations;
  projects: ProjectsTranslations;
  stats: StatsTranslations;
  callToAction: CallToActionTranslations;
  footer: FooterTranslations;
  navigation: NavigationTranslations;
  aboutPage: AboutPageTranslations;
  careerPage: CareerPageTranslations;
  careerSection: CareerSectionTranslations;
  cooperationPage: CooperationPageTranslations;
  contactPage: ContactPageTranslations;
  projectsPage: ProjectsPageTranslations;
  imageSection: ImageSectionTranslations;
  darkImageSection: DarkImageSectionTranslations;
  imageSection2: ImageSection2Translations;
  projectsMapsSection: ProjectsMapsSectionTranslations;
  metadata: MetadataTranslations;
}
