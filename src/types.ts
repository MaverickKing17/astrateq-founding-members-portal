export interface TimelineStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  detail: string;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  description: string;
}

export interface ResourceDocument {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  size: string;
  format: string;
  type: 'guide' | 'report' | 'manifesto' | 'education';
}

export interface VehicleCompatibility {
  make: string;
  model: string;
  years: string;
  status: 'Highly Compatible' | 'Compatible with Adaptation' | 'Researching';
  hardwareRequirement: string;
  climatePerformance: string;
}
