import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Building2, MapPin, Filter } from 'lucide-react';
import { PROJECTS, type Project } from '../../data/polarisData';

interface ProjectsPageProps {
  onNavigatePage: (pageId: string) => void;
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigatePage,
  onSelectProject,
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const CATEGORIES = ['ALL', 'HOSPITALITY', 'COMMERCIAL', 'HIGH RISE', 'LUXURY VILLAS'];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toUpperCase() === selectedCategory);

  return (
    <div style={{ backgroundColor: 'var(--color-obsidian)', color: 'var(--color-ivory)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Modern Luxury Website Breadcrumb */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
            <button
              onClick={() => onNavigatePage('home')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-stone)',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
            >
              <span>HOME</span>
            </button>
            <span style={{ color: 'var(--color-bronze-dark)' }}>/</span>
            <span style={{ color: 'var(--color-bronze)' }}>LANDMARK PORTFOLIO</span>
          </nav>

          <div className="timber-badge">
            <Building2 size={12} color="var(--color-bronze)" />
            <span>SECTION 05 // COMPLETED ARCHITECTURAL WORKS</span>
          </div>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="arch-label">SELECTED WORKS & BUILT ARCHITECTURE // GCC & INTERNATIONAL</div>
          <h1
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em',
              lineHeight: 1.05,
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            LANDMARK PORTFOLIO & CASE STUDIES.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.1rem',
              color: 'var(--color-stone)',
              maxWidth: '820px',
              lineHeight: 1.7
            }}
          >
            Explore our curated portfolio of five-star hospitality fit-outs, Grade-A commercial headquarters, high-rise
            architectural joinery, and private presidential residences delivered across Dubai, Abu Dhabi, Saudi Arabia, and the wider Gulf.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--color-bronze-border-subtle)',
            marginBottom: '3rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '0.5rem', color: 'var(--color-stone-dark)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem' }}>
            <Filter size={13} color="var(--color-bronze)" />
            <span>FILTER:</span>
          </div>

          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isActive ? 'var(--color-timber-walnut)' : 'rgba(25, 22, 19, 0.4)',
                  border: `1px solid ${isActive ? 'var(--color-bronze)' : 'var(--color-bronze-border-subtle)'}`,
                  color: isActive ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                  padding: '0.65rem 1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2.5rem',
            marginBottom: '5rem'
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="woodcraft-frame"
                style={{
                  backgroundColor: 'var(--color-pitch)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
                onClick={() => onSelectProject(proj)}
              >
                {/* Project Image Box */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    borderBottom: '1px solid var(--color-timber-border)'
                  }}
                >
                  <img
                    src={proj.featuredImage}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                  />

                  {/* Category Badge */}
                  <div
                    className="timber-badge"
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(8, 7, 6, 0.85)'
                    }}
                  >
                    <span>{proj.category.toUpperCase()}</span>
                  </div>

                  {proj.year && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--color-ivory)',
                        backgroundColor: 'rgba(8, 7, 6, 0.75)',
                        padding: '3px 8px',
                        border: '1px solid var(--color-timber-border)'
                      }}
                    >
                      {proj.year}
                    </div>
                  )}
                </div>

                {/* Project Metadata Content */}
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-timber-honey)', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', marginBottom: '0.5rem' }}>
                    <MapPin size={13} color="var(--color-bronze)" />
                    <span>{proj.location}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.4rem',
                      color: 'var(--color-ivory-light)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.25
                    }}
                  >
                    {proj.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.85rem',
                      color: 'var(--color-stone)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {proj.description}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-bronze-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-bronze)', letterSpacing: '0.1em' }}>
                      EXPLORE DOSSIER & GALLERY
                    </span>
                    <ArrowUpRight size={14} color="var(--color-bronze)" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Turnkey Callout */}
        <div
          className="woodcraft-frame"
          style={{
            backgroundColor: 'rgba(25, 22, 19, 0.6)',
            padding: '3rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div className="arch-label">BESPOKE ARCHITECTURAL TENDER & SPECIFICATION</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '2.4rem',
              color: 'var(--color-ivory-light)',
              maxWidth: '750px',
              margin: '0.5rem 0 1.25rem 0'
            }}
          >
            HAVE A LANDMARK ARCHITECTURAL OR HOSPITALITY COMMISSION?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.98rem',
              color: 'var(--color-stone)',
              maxWidth: '650px',
              lineHeight: 1.7,
              marginBottom: '2rem'
            }}
          >
            Our dedicated commercial contracts team in Dubai Investment Park reviews tender packages, BIM models, and joinery schedules.
            We provide comprehensive value engineering and certified fire door submittals.
          </p>

          <button onClick={onOpenConsultation} className="btn-bronze" style={{ padding: '0.95rem 2rem' }}>
            <span>COMMENCE TENDER CONSULTATION</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Website Cross-Page Pagination */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid var(--color-bronze-border-subtle)',
            paddingTop: '2.5rem',
            marginTop: '3.5rem'
          }}
        >
          <button
            onClick={() => onNavigatePage('facility')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
          >
            <ArrowLeft size={14} />
            <span>PREV: 04 // 45,000+ SQ. FT. DIP PLANT</span>
          </button>

          <button
            onClick={() => onNavigatePage('commission')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-stone)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              padding: 0
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-bronze-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-stone)')}
          >
            <span>NEXT: 06 // COMMISSION & RFQ</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
