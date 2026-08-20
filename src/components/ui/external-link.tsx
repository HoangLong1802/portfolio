type ExternalLinkProps = {
  readonly className: string;
  readonly externalLabel: string;
  readonly href: string;
  readonly label: string;
};

export function ExternalLink({ className, externalLabel, href, label }: ExternalLinkProps) {
  return (
    <a className={`${className} external-link`} href={href}>
      <span>{label}</span>
      <span className="external-link__icon" aria-hidden="true">
        {"\u2197"}
      </span>
      <span className="sr-only"> ({externalLabel})</span>
    </a>
  );
}
