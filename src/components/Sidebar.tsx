import React from 'react';

interface SidebarProps {
  visible: boolean;
  activeSection: string;
}

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  label: string;
  children: NavItem[];
}

type NavEntry = NavItem | NavGroup;

const isGroup = (entry: NavEntry): entry is NavGroup =>
  'children' in entry;

const NAV_ENTRIES: NavEntry[] = [
  { id: 'cover', label: 'Cover' },
  { id: 'toc', label: 'Index' },
  {
    label: 'Projects',
    children: [
      { id: 'project-elo', label: 'ELO' },
      { id: 'project-figma', label: 'Figma AI' },
      { id: 'project-solvps', label: 'SolvPS' },
      { id: 'project-solmate', label: 'SOLMate' },
      { id: 'project-paytrace', label: 'PayTrace' },
    ],
  },
  { id: 'info', label: 'Profile' },
];

const PROJECT_IDS = ['project-elo', 'project-figma', 'project-solvps', 'project-solmate', 'project-paytrace'];

const Sidebar: React.FC<SidebarProps> = ({ visible, activeSection }) => {
  const isProjectActive = PROJECT_IDS.includes(activeSection);

  const linkStyle = (id: string): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 8px',
    fontSize: 12,
    fontWeight: activeSection === id ? 500 : 400,
    fontFamily: "'Noto Sans KR', sans-serif",
    letterSpacing: '0.01em',
    color: activeSection === id ? '#2c4a5e' : 'rgba(120,145,165,.7)',
    textDecoration: 'none',
    borderRadius: 4,
    background: 'transparent',
    whiteSpace: 'nowrap' as const,
    lineHeight: 1.6,
    transition: 'color .15s',
  });

  const subLinkStyle = (id: string): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '3px 8px',
    fontSize: 11.5,
    fontWeight: activeSection === id ? 500 : 300,
    fontFamily: "'Noto Sans KR', sans-serif",
    letterSpacing: '0.01em',
    color: activeSection === id ? '#2c4a5e' : 'rgba(130,155,175,.6)',
    textDecoration: 'none',
    borderRadius: 4,
    background: 'transparent',
    lineHeight: 1.6,
    transition: 'color .15s',
  });

  const dot = (active: boolean, small = false): React.CSSProperties => ({
    width: small ? 3 : 3,
    height: small ? 3 : 3,
    borderRadius: '50%',
    background: active ? (small ? 'rgba(100,150,180,.45)' : 'rgba(100,150,180,.6)') : 'transparent',
    flexShrink: 0,
    transition: 'background .15s',
  });

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: 160,
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 0',
        zIndex: 100,
        transform: visible ? 'translateX(0)' : 'translateX(100%)',
        opacity: visible ? 1 : 0,
        transition: 'transform .35s cubic-bezier(.4,0,.2,1), opacity .3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Workspace label */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(140,165,185,.6)',
          padding: '0 16px 16px',
          marginBottom: 8,
        }}
      >
        우정인 포트폴리오
      </div>

      {/* Nav list */}
      <ul style={{ listStyle: 'none', padding: '0 8px', overflowY: 'auto', flex: 1 }}>
        {NAV_ENTRIES.map((entry, i) => {
          if (isGroup(entry)) {
            return (
              <li key={entry.label} style={{ marginTop: 4 }}>
                {/* Group label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '4px 8px',
                    fontSize: 12,
                    fontFamily: "'Noto Sans KR', sans-serif",
                    color: isProjectActive ? '#2c4a5e' : 'rgba(120,145,165,.7)',
                    fontWeight: isProjectActive ? 500 : 400,
                    cursor: 'default',
                    userSelect: 'none',
                    letterSpacing: '0.01em',
                  }}
                >
                  <span style={dot(isProjectActive)} />
                  {entry.label}
                  <span
                    style={{
                      fontSize: 9,
                      color: 'rgba(160,185,200,.5)',
                      marginLeft: 'auto',
                    }}
                  >
                    ▾
                  </span>
                </div>

                {/* Children */}
                <ul style={{ listStyle: 'none', paddingLeft: 12 }}>
                  {entry.children.map((child) => (
                    <li key={child.id}>
                      <a href={`#${child.id}`} style={subLinkStyle(child.id)}>
                        <span style={dot(activeSection === child.id, true)} />
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }

          return (
            <li key={entry.id} style={{ marginTop: i > 0 ? 4 : 0 }}>
              <a href={`#${entry.id}`} style={linkStyle(entry.id)}>
                <span style={dot(activeSection === entry.id)} />
                {entry.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
