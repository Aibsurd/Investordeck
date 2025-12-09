export enum SlideType {
  TITLE = 'TITLE',
  PROBLEM = 'PROBLEM',
  SOLUTION = 'SOLUTION',
  TECH = 'TECH',
  MARKET = 'MARKET',
  BUSINESS = 'BUSINESS',
  ROADMAP = 'ROADMAP',
  COMPETITION = 'COMPETITION',
  ASK = 'ASK',
  TEAM = 'TEAM',
  AGENT_MIDDLEWARE = 'AGENT_MIDDLEWARE',
  TELEMETRY = 'TELEMETRY'
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle: string;
  content?: {
    heading?: string;
    body?: string;
    points?: { title: string; description: string; icon?: string }[];
    metrics?: { label: string; value: string; detail?: string }[];
    columns?: { title: string; price?: string; features: string[] }[];
    members?: { name: string; role: string; background: string }[];
    tags?: string[];
  };
}