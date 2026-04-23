import React from 'react';
import { Project, IssueTag } from '../types';

export interface Props {
  project: Project;
}

const TAG_COLOR: Record<IssueTag, string> = {
  'Troubleshooting': '#c05040',
  'Prevention':      '#4a80b0',
  'Refactoring':     '#3a8060',
  'Clean Code':      '#7050a0',
};

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="block font-sans text-[12px] font-medium tracking-[0.2em] uppercase text-[#4a7090] mb-3">
    {children}
  </span>
);

const ProjectPage: React.FC<Props> = ({ project }) => (
  <section className="relative min-h-screen">

    {/* Header */}
    <div className="pb-10">
      <div className="font-sans text-[12px] font-light text-[#6a8090] tracking-[0.06em] mb-4">
        {project.index} — {project.period}
      </div>
      <h2 className="font-sans text-[40px] font-light text-ink leading-tight tracking-[-0.02em] mb-4">
        {project.title}
      </h2>
      <p className="font-sans text-[14px] font-light text-[#4a6070] leading-relaxed mb-3">
        {project.overview}
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {project.stack.map((s) => (
          <span key={s} className="font-sans text-[12px] font-light text-[#7a95a8]">{s}</span>
        ))}
      </div>
    </div>

    {/* Issues */}
    {project.issues.map((issue, i) => (
      <div key={i} className="py-12 border-t border-border">

        {/* Issue header */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="font-sans text-[12px] font-medium tracking-[0.16em] uppercase"
            style={{ color: TAG_COLOR[issue.tag] }}
          >
            {issue.tag}
          </span>
          <span className="text-[#c0d0da]">—</span>
          <span className="font-sans text-[18px] font-light text-ink">{issue.title}</span>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-2 gap-16 items-start">

          {/* Left: image + problem */}
          <div>
            <div className="w-full aspect-video bg-[rgba(160,190,210,0.06)] border border-[rgba(160,190,210,0.18)] flex items-center justify-center mb-6">
              <span className="font-sans text-[12px] text-[#8aa8b8] tracking-[0.1em]">
                Architecture / Code
              </span>
            </div>
            <p className="font-sans text-[14px] font-light text-[#3a5060] leading-[1.9]">
              {issue.problem}
            </p>
          </div>

          {/* Right: solution + result */}
          <div className="flex flex-col gap-10">
            <div>
              <Label>Solution</Label>
              <p className="font-sans text-[14px] font-light text-[#3a5060] leading-[1.9]">
                {issue.solution}
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <Label>Result</Label>
              {issue.metrics && issue.metrics.length > 0 && (
                <div className="flex gap-10 mb-5">
                  {issue.metrics.map((m, j) => (
                    <div key={j}>
                      <span className="block font-sans text-[12px] tracking-[0.12em] uppercase text-[#6a8090] mb-1.5">
                        {m.label}
                      </span>
                      <span className="font-sans text-[24px] font-light text-ink tracking-[-0.01em]">
                        {m.after}
                      </span>
                      <span className="font-sans text-[12px] font-light text-[#4a7090] ml-2">
                        {m.delta}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <p className="font-sans text-[14px] font-light text-[#3a5060] leading-[1.9]">
                {issue.result}
              </p>
            </div>
          </div>

        </div>
      </div>
    ))}

    <div className="mt-16 border-t border-border" />
  </section>
);

export default ProjectPage;
