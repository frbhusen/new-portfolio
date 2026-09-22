import enSite from './en/site.json';
import enHome from './en/home.json';
import enAbout from './en/about.json';
import enProjects from './en/projects.json';
import enExperience from './en/experience.json';
import enEducation from './en/education.json';
import enAchievements from './en/achievements.json';
import enServices from './en/services.json';
import enContact from './en/contact.json';
import enLabels from './en/labels.json';
import arSite from './ar/site.json';
import arHome from './ar/home.json';
import arAbout from './ar/about.json';
import arProjects from './ar/projects.json';
import arExperience from './ar/experience.json';
import arEducation from './ar/education.json';
import arAchievements from './ar/achievements.json';
import arServices from './ar/services.json';
import arContact from './ar/contact.json';
import arLabels from './ar/labels.json';

export const en = {
  ...enSite,
  home: enHome,
  about: enAbout,
  projects: enProjects,
  experience: enExperience,
  education: enEducation,
  achievements: enAchievements,
  services: enServices,
  contact: enContact,
  labels: enLabels,
} as const;

export const ar = {
  ...arSite,
  home: arHome,
  about: arAbout,
  projects: arProjects,
  experience: arExperience,
  education: arEducation,
  achievements: arAchievements,
  services: arServices,
  contact: arContact,
  labels: arLabels,
} as const;

export type Content = typeof en;