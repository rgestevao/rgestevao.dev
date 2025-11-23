import React from 'react';
import { Moon, Sun, Languages, ArrowUpRight, Github, Linkedin, Copy } from 'lucide-react';

export const IconMoon = () => <Moon size={18} />;
export const IconSun = () => <Sun size={18} />;
export const IconLang = () => <Languages size={18} />;
export const IconArrowUpRight = ({ className }: { className?: string }) => (
  <ArrowUpRight size={16} className={className} />
);
export const IconGithub = () => <Github size={18} />;
export const IconLinkedin = () => <Linkedin size={18} />;
export const IconCopy = () => <Copy size={18} />;