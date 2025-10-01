import React from "react";
import './SocialLinks.css';

interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

interface SocialLinksProps {
  urls: string[];
}

interface ServiceConfig {
  icon: string;
  label: string;
}

const serviceConfigs: Record<string, ServiceConfig> = {
  'github': { icon: 'fa-github', label: 'GitHub' },
  'medium': { icon: 'fa-medium', label: 'Medium' },
  'blogger': { icon: 'fa-blogger', label: 'Blogger' },
  'blogspot': { icon: 'fa-blogger', label: 'Blogger' },
  'instagram': { icon: 'fa-instagram', label: 'Instagram' },
  'linkedin': { icon: 'fa-linkedin', label: 'LinkedIn' },
};

const buildSocialLinks = (url: string): SocialLink => {
  const lowercaseUrl = url.toLowerCase();
  
  for (const [service, config] of Object.entries(serviceConfigs)) {
    if (lowercaseUrl.includes(service)) {
      return {
        href: url,
        icon: config.icon,
        label: config.label,
      };
    }
  }
  
  throw new Error(`Unknown social service for URL: ${url}`);
};

const SocialLinks: React.FC<SocialLinksProps> = ({ urls }) => {
  const socialLinks = urls.map(buildSocialLinks);

  return (
    <div>
      {socialLinks.map((link) => (
        <a
          href={link.href}
          key={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <i className={`fa-brands ${link.icon} link-icon`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
