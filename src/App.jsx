import React from 'react'
import ProfileHeader from './components/ProfileHeader'
import LinkButton from './components/LinkButton'
import ContentGallery from './components/ContentGallery'
import { Globe, Users, Ticket, Code2 } from 'lucide-react'

function App() {
  return (
    <div className="app-container">
      <ProfileHeader 
        name="Carlos Lozano" 
        bio="Desarrollo páginas web, sistemas empresariales y soluciones digitales personalizadas para ayudar a empresas a mejorar sus procesos."
        imageUrl="/profile.png"
      />

      <div className="links-section">
        <h2 className="section-title">Servicios Web & Software</h2>
        <LinkButton 
          icon={<Globe size={24} />}
          title="¿Necesitas página web?"
          subtitle="Visita mi portafolio principal"
          url="https://carloslozanodev.com"
        />
        
        <LinkButton 
          icon={<Users size={24} />}
          title="Gestión de Alumnos (Gimnasios)"
          subtitle="Demo del sistema CRM para trainers"
          url="#"
        />
        
        <LinkButton 
          icon={<Ticket size={24} />}
          title="Gestor de Tickets"
          subtitle="Demo del sistema para soporte corporativo"
          url="#"
        />
      </div>

      <ContentGallery />
    </div>
  )
}

export default App
