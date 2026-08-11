import React from 'react';
import { Play, Smartphone, Camera, MonitorPlay } from 'lucide-react';

const ContentGallery = () => {
  return (
    <div className="links-section" style={{ marginTop: '1rem' }}>
      <h2 className="section-title">Portafolio Audiovisual</h2>
      <div className="social-grid">
        <a href="#" className="social-card glass-panel" style={{ animationFillMode: 'both', animationDelay: '0.6s' }}>
          <div className="icon-wrapper">
            <MonitorPlay size={32} />
          </div>
          <span>Edición de Video</span>
        </a>
        
        <a href="#" className="social-card glass-panel" style={{ animationFillMode: 'both', animationDelay: '0.7s' }}>
          <div className="icon-wrapper">
            <Smartphone size={32} />
          </div>
          <span>Gym Content</span>
        </a>
      </div>
    </div>
  );
};

export default ContentGallery;
