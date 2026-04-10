export interface ExperienceEntry {
  time: string;
  text: string;
  note?: string[];
}

export interface WorkDetail {
  CLIENT: string;
  TECHNOLOGY: string;
  DESIGN?: string;
  DETAILDS: string[];
  PERIOD: string;
  LINK: [string[], string | false] | string;
}

export interface WorkEntry {
  detail: WorkDetail;
  srcType?: 'movie' | 'desktop';
  srcText: string[];
  imgPath: string;
  /**
   * Optional explicit list of image filenames (with extension) inside `imgPath`.
   * When provided, the first item is used as the thumbnail and the remaining
   * items are shown as captures inside the dialog. When omitted, the legacy
   * convention (`img.jpg` thumbnail + `capcha-0X.jpg` captures) is used.
   */
  images?: string[];
}

export interface StrengthPoint {
  title: string;
  description: string;
}

export interface StrengthEntry {
  intro: string[];
  points: StrengthPoint[];
}

export interface PortfolioData {
  experience: {
    main: Record<string, ExperienceEntry>;
    other: Record<string, ExperienceEntry>;
  };
  works: Record<string, WorkEntry>;
  strength: Record<string, StrengthEntry>;
}
