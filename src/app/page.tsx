import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { awards } from "@/data/awards";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-24">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-lg text-[var(--text-muted)]">
        {profile.title} &mdash; {profile.tagline}
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {skills.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-medium">{cat.category}</h3>
              <ul className="mt-1 text-sm text-[var(--text-muted)]">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Experience</h2>
        {experience.map((exp) => (
          <div key={exp.company + exp.role} className="mt-6">
            <h3 className="font-medium">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              {exp.startDate} &ndash; {exp.endDate}
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm">
              {exp.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="rounded-lg border border-[var(--border)] p-5"
            >
              <h3 className="font-medium">{proj.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {proj.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[var(--bg-subtle)] px-2 py-0.5 font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Education</h2>
        {education.map((edu) => (
          <div key={edu.institution} className="mt-4">
            <h3 className="font-medium">{edu.institution}</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {edu.degree} in {edu.field} ({edu.startYear}&ndash;{edu.endYear})
            </p>
          </div>
        ))}
      </section>

      {awards.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Awards</h2>
          {awards.map((a) => (
            <div key={a.title} className="mt-4">
              <h3 className="font-medium">{a.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">
                {a.issuer} &mdash; {a.date}
              </p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}
