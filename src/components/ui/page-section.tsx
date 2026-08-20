import type { ReactNode } from "react";
import { Reveal } from "../motion/reveal";

type PageSectionProps = {
  readonly body?: string;
  readonly children?: ReactNode;
  readonly eyebrow?: string;
  readonly id: string;
  readonly navigationParent?: string;
  readonly title: string;
};

export function PageSection({ body, children, eyebrow, id, navigationParent, title }: PageSectionProps) {
  return (
    <section className="section-shell" data-navigation-parent={navigationParent} id={id}>
      <Reveal pattern="heading">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {body ? <p className="section-intro">{body}</p> : null}
        </div>
      </Reveal>
      {children ? <Reveal>{children}</Reveal> : null}
    </section>
  );
}
