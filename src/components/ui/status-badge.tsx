type StatusBadgeProps = {
  readonly label: string;
};

export function StatusBadge({ label }: StatusBadgeProps) {
  return <span className="status-badge">{label}</span>;
}
