import React, { useState } from 'react';

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

const Sidebar: React.FC<SidebarProps> = ({ visible, activeSection }) => {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className="fixed top-6 right-6 z-100 transition-[transform,opacity] duration-300"
      style={{
        background: 'rgba(238, 241, 244, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '12px',
        border: '1px solid rgba(160, 185, 210, 0.25)',
        width: '168px',
        transform: visible ? 'translateY(0)' : 'translateY(-10px)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        boxShadow: '0 4px 24px rgba(60,90,120,0.08)',
      }}
    >
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 cursor-pointer"
        style={{ background: 'none', border: 'none', outline: 'none' }}
      >
        <span className="font-sans text-[11px] font-medium tracking-[0.16em] uppercase text-[#8aa0b4]">
          Menu
        </span>
        <span className="relative flex items-center justify-center" style={{ width: '16px', height: '16px' }}>
          {open ? (
            <>
              <span
                className="absolute block h-px bg-[#8aa0b4] transition-all duration-200"
                style={{ width: '14px', transform: 'rotate(45deg)' }}
              />
              <span
                className="absolute block h-px bg-[#8aa0b4] transition-all duration-200"
                style={{ width: '14px', transform: 'rotate(-45deg)' }}
              />
            </>
          ) : (
            <span className="flex flex-col gap-1 items-end">
              <span className="block h-px bg-[#8aa0b4]" style={{ width: '14px' }} />
              <span className="block h-px bg-[#8aa0b4]" style={{ width: '10px' }} />
            </span>
          )}
        </span>
      </button>

      {/* Divider */}
      <div className="mx-4 border-t border-[rgba(160,185,210,0.2)]" />

      {/* Nav list */}
      <div
        className="overflow-hidden transition-all duration-250"
        style={{
          maxHeight: open ? '400px' : '0px',
          opacity: open ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        }}
      >
        <ul className="list-none px-3 py-3">
          {NAV_ENTRIES.map((entry, i) => {
            if (isGroup(entry)) {
              return (
                <li key={entry.label} className={i > 0 ? 'mt-3' : ''}>
                  <span
                    className="block text-center font-sans text-[10px] font-medium tracking-[0.2em] uppercase mb-1"
                    style={{ color: 'rgba(100,130,155,0.5)' }}
                  >
                    {entry.label}
                  </span>
                  <ul className="list-none">
                    {entry.children.map((child) => {
                      const isActive = activeSection === child.id;
                      return (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            className="block text-center py-1 font-sans text-[13px] no-underline transition-colors duration-150 rounded-md"
                            style={{
                              color: isActive ? '#1a2530' : 'rgba(90,118,140,0.7)',
                              fontWeight: isActive ? 500 : 300,
                              background: isActive ? 'rgba(140,175,205,0.12)' : 'transparent',
                            }}
                          >
                            {child.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            const isActive = activeSection === entry.id;
            return (
              <li key={entry.id} className={i > 0 ? 'mt-0.5' : ''}>
                <a
                  href={`#${entry.id}`}
                  className="block text-center py-1 font-sans text-[13px] no-underline transition-colors duration-150 rounded-md"
                  style={{
                    color: isActive ? '#1a2530' : 'rgba(90,118,140,0.7)',
                    fontWeight: isActive ? 500 : 400,
                    background: isActive ? 'rgba(140,175,205,0.12)' : 'transparent',
                  }}
                >
                  {entry.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
