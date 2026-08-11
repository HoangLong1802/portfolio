import type { ReactNode } from "react";

type PageSectionProps = {
  readonly body?: string;
  readonly children?: ReactNode;
  readonly eyebrow?: string;
  readonly id: string;
  readonly title: string;
};

export function PageSection({ body, children, eyebrow, id, title }: PageSectionProps) {
  return (
    <section className="section-shell" id={id}>
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {body ? <p className="section-intro">{body}</p> : null}
      </div>
      {children}
    </section>
  );
}
