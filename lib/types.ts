export interface TItems {
    title: string;
    href: string;
    description: string;
}

export interface TProject {
  title: string;
  description: string;
  techStack: string[];
  date?: string;
  media?: {
    type: "video" | "image";
    src: string;
  }[];
  github?: string;
  demo?: string;
  note?: string;
}

export interface TCreativeItem {
  title: string;
  description: string;
  techStack: string[];
  date: string;
  componentKey: string;
  note?: string;
  componentProps?: Record<string, unknown>;
}

export interface TWorkProject {
  title: string;
  description: string;
  techStack: string[];
  media?: {
    type: "video" | "image";
    src: string;
  }[];
}

export interface TWorkSection {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  headline?: string;
  intro?: string;
  projects: TWorkProject[];
}