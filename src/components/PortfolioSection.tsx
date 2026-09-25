import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, MapPin } from 'lucide-react';
import { PROJECTS } from '../data/polarisData';
import type { Project } from '../data/polarisData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: Project['category'][] = [
  'Hospitality',
  'Commercial',
  'High Rise',
  'Luxury Villas',
  'Ongoing'
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<Project['category']>('Hospitality');
  const [projectIndex, setProjectIndex] = useState(0);

  // Projects filtered by active category
  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);
  const currentProject = filteredProjects[projectIndex] || filteredProjects[0];

  const handleCategoryChange = (cat: Project['category']) => {
    setActiveCategory(cat);
    setProjectIndex(0);
  };

  const handleNextProject = () => {
    setProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevProject = () => {
    setProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section
      id="portfolio"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-obsidian)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '850px', marginBottom: '4rem' }}>
          <div className="arch-label">SELECTED WORKS // 50+ LANDMARK DEVELOPMENTS</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 500,
              color: 'var(--color-ivory-light)',
              letterSpacing: '0.04em'
            }}
          >
            DOCUMENTED PORTFOLIO
          </h2>
          <p
            style={{
              marginTop: '1rem',
              color: 'var(--color-stone)',
              fontSize: '1rem',
              maxWidth: '650px'
            }}
          >
            From international 5-star hotels and Fortune 500 regional headquarters to palatial
            private residences in Dubai Hills. Authentic architectural photography extracted from our
            official pre-qualification record.
          </p>
        </div>

        {/* Category Switcher Tabs: HOSPITALITY → COMMERCIAL → HIGH RISE → LUXURY VILLAS → ONGOING */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            overflowX: 'auto',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--color-bronze-border-subtle)',
            marginBottom: '4.5rem',
            scrollbarWidth: 'none'
          }}
        >
          {CATEGORIES.map((cat, idx) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 16px',
                  backgroundColor: isActive ? 'rgba(191, 160, 122, 0.12)' : 'transparent',
                  border: `1px solid ${isActive ? 'var(--color-bronze)' : 'transparent'}`,
                  color: isActive ? 'var(--color-ivory-light)' : 'var(--color-stone)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ color: isActive ? 'var(--color-bronze)' : 'var(--color-stone-dark)' }}>
                  0{idx + 1}
                </span>
                {cat}
              </button>
            );
          })}
        </div>

        {/* The Requested Big Interaction Showcase:
            CATEGORY
            [ LARGE PROJECT IMAGE WITH HORIZONTAL CLIP REVEAL ]
            PROJECT TITLE + LOCATION */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto 7rem auto',
            textAlign: 'center'
          }}
        >
          {/* Category Top Indicator */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.3em',
              color: 'var(--color-bronze)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}
          >
            — {activeCategory.toUpperCase()} ARCHITECTURE —
          </div>

          {/* Large Project Image with Architectural Clip/Reveal Animation */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              maxHeight: '620px',
              backgroundColor: 'var(--color-charcoal-dark)',
              border: '1px solid var(--color-bronze-border)',
              overflow: 'hidden',
              margin: '0 auto 2.5rem auto'
            }}
          >
            <AnimatePresence mode="wait">
              {currentProject && (
                <motion.div
                  key={currentProject.id}
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1.0,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                    transition: { duration: 0.6 }
                  }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${currentProject.featuredImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Subtle Gradient & Hover Backdrop */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(8, 7, 6, 0.75) 100%)'
                    }}
                  />

                  {/* Quick Action Button on Hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      zIndex: 10
                    }}
                  >
                    <button
                      onClick={() => onSelectProject(currentProject)}
                      className="btn-bronze"
                      style={{
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.65rem'
                      }}
                    >
                      <Eye size={13} />
                      <span>VIEW STUDY</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Slider Prev / Next Architectural Chevrons */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={handlePrevProject}
                  style={{
                    position: 'absolute',
                    left: '1.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(10, 9, 8, 0.85)',
                    border: '1px solid var(--color-bronze-border)',
                    color: 'var(--color-ivory)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-bronze)';
                    e.currentTarget.style.backgroundColor = 'var(--color-bronze)';
                    e.currentTarget.style.color = 'var(--color-obsidian)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-bronze-border)';
                    e.currentTarget.style.backgroundColor = 'rgba(10, 9, 8, 0.85)';
                    e.currentTarget.style.color = 'var(--color-ivory)';
                  }}
                  aria-label="Previous project"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNextProject}
                  style={{
                    position: 'absolute',
                    right: '1.5rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(10, 9, 8, 0.85)',
                    border: '1px solid var(--color-bronze-border)',
                    color: 'var(--color-ivory)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-bronze)';
                    e.currentTarget.style.backgroundColor = 'var(--color-bronze)';
                    e.currentTarget.style.color = 'var(--color-obsidian)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-bronze-border)';
                    e.currentTarget.style.backgroundColor = 'rgba(10, 9, 8, 0.85)';
                    e.currentTarget.style.color = 'var(--color-ivory)';
                  }}
                  aria-label="Next project"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* Project Title & Location Below */}
          <AnimatePresence mode="wait">
            {currentProject && (
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    color: 'var(--color-ivory-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.5rem'
                  }}
                >
                  {currentProject.title}
                </h3>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.18em',
                    color: 'var(--color-bronze)',
                    textTransform: 'uppercase',
                    marginBottom: '1rem'
                  }}
                >
                  <MapPin size={14} />
                  {currentProject.location}
                </div>
                <p
                  style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    color: 'var(--color-stone)',
                    fontSize: '0.92rem',
                    lineHeight: 1.7
                  }}
                >
                  {currentProject.scope}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Asymmetric Project Grid Showcase (Curated Selected Projects) */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--color-bronze-border-subtle)',
              paddingBottom: '1rem'
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  color: 'var(--color-bronze)',
                  textTransform: 'uppercase'
                }}
              >
                ARCHITECTURAL ARCHIVE
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-serif-display)',
                  fontSize: '1.4rem',
                  color: 'var(--color-ivory)',
                  marginTop: '0.25rem'
                }}
              >
                ALL {activeCategory.toUpperCase()} PROJECTS
              </h4>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-stone-dark)'
              }}
            >
              {filteredProjects.length} DOCUMENTED SITES
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {filteredProjects.map((p, idx) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                style={{
                  cursor: 'pointer',
                  border: '1px solid var(--color-bronze-border-subtle)',
                  backgroundColor: 'var(--color-charcoal-dark)',
                  transition: 'all 0.4s var(--transition-slow)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-bronze-border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image Frame */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    backgroundColor: 'var(--color-obsidian)'
                  }}
                >
                  <img
                    src={p.featuredImage}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1.0)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(10, 9, 8, 0.85)',
                      padding: '4px 8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--color-bronze)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    0{idx + 1}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.75rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-bronze)',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <MapPin size={12} />
                    {p.location}
                  </div>

                  <h5
                    style={{
                      fontFamily: 'var(--font-serif-display)',
                      fontSize: '1.25rem',
                      color: 'var(--color-ivory-light)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3
                    }}
                  >
                    {p.title}
                  </h5>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                      color: 'var(--color-stone)',
                      marginBottom: '1.25rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {p.scope}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(191, 160, 122, 0.1)',
                      paddingTop: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-stone-dark)'
                    }}
                  >
                    <span>{p.clientOrOperator || "Master Developer"}</span>
                    <span style={{ color: 'var(--color-bronze)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      DETAILS <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
