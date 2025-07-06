export interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  whatYouGet: string[];
  process: string[];
  whyChoose: string[];
}

export interface ServiceDetails {
  [key: string]: ServiceDetail;
}

export interface ServiceDetailsData {
  en: ServiceDetails;
  hi: ServiceDetails;
}

export type ServiceId = 
  | "birth-chart-analysis"
  | "relationship-compatibility"
  | "career-guidance"
  | "health-astrology"
  | "financial-astrology"
  | "gemstone-consultation"; 