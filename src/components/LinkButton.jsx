import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const LinkButton = ({ icon, title, subtitle, url, target = "_blank" }) => {
  return (
    <a href={url} target={target} rel="noopener noreferrer" className="link-button glass-panel" style={{ animationFillMode: 'both' }}>
      <div className="link-content">
        <div className="link-icon">
          {icon}
        </div>
        <div className="link-text">
          <span className="link-title">{title}</span>
          {subtitle && <span className="link-subtitle">{subtitle}</span>}
        </div>
      </div>
      <div className="link-arrow">
        <ArrowUpRight size={20} />
      </div>
    </a>
  );
};

export default LinkButton;
