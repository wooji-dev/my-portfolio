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

const isGroup = (entry: NavEntry): entry is NavGroup => 'children' in entry;

const NAV_ENTRIES: NavEntry[] = [
  { id: 'cover', label: 'Cover' },
  { id: 'toc', label: 'Index' },
  {
    label: 'Projects',
    children: [
      { id: 'project-ux-ecommerce', label: 'E-Commerce UX' },
      { id: 'project-ab-test', label: 'A/B Test' },
      { id: 'project-figma', label: 'Figma AI' },
      { id: 'project-solvps', label: 'SolvPS' },
      { id: 'project-solmate', label: 'SOLMate' },
      { id: 'project-paytrace', label: 'PayTrace' },
    ],
  },
  { id: 'thanks', label: 'Thank You' },
];

const NavLink: React.FC<{ id: string; label: string; isActive: boolean; inset?: boolean }> = ({
  id,
  label,
  isActive,
  inset,
}) => (
  <a
    href={`#${id}`}
    className="font-sans text-[13px] no-underline transition-colors duration-150"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '5px 0',
      paddingLeft: inset ? '14px' : '0',
      color: isActive ? '#0f172a' : 'rgba(71,85,105,0.72)',
      fontWeight: isActive ? 500 : 400,
    }}
  >
    <span
      style={{
        display: 'inline-block',
        width: '4px',
        height: '4px',
        borderRadius: '999px',
        background: isActive ? '#0f172a' : 'transparent',
        transition: 'background 150ms',
        flexShrink: 0,
      }}
    />
    <span>{label}</span>
  </a>
);

const Sidebar: React.FC<SidebarProps> = ({ visible, activeSection }) => (
  <nav
    className="fixed top-1/2 right-8 z-100"
    style={{
      transform: `translateY(-50%) translateX(${visible ? '0' : '12px'})`,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity 250ms cubic-bezier(.4,0,.2,1), transform 250ms cubic-bezier(.4,0,.2,1)',
    }}
  >
    <ul className="list-none m-0 p-0" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {NAV_ENTRIES.map((entry) => {
        if (isGroup(entry)) {
          return (
            <li key={entry.label} style={{ marginTop: '14px' }}>
              <span
                className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase"
                style={{ color: 'rgba(148,163,184,0.7)', display: 'block', marginBottom: '6px' }}
              >
                {entry.label}
              </span>
              <ul className="list-none m-0 p-0">
                {entry.children.map((child) => (
                  <li key={child.id}>
                    <NavLink
                      id={child.id}
                      label={child.label}
                      isActive={activeSection === child.id}
                      inset
                    />
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        return (
          <li key={entry.id}>
            <NavLink id={entry.id} label={entry.label} isActive={activeSection === entry.id} />
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Sidebar;
