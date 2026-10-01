import { Briefcase, Globe, Mail, type LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { SiCoursera } from 'react-icons/si';

// Keys used by the "icon" field in links.json. Add an import and a line to support a new one.
// An unknown or missing key falls back to a globe icon.
export const linkIcons: Record<string, IconType | LucideIcon> = {
  github: FaGithub, linkedin: FaLinkedinIn, instagram: FaInstagram, youtube: FaYoutube, coursera: SiCoursera,
  email: Mail, portfolio: Briefcase, website: Globe,
};
