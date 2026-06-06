export function StatusBadge({ status, children = status, className = '' }) {
  const normalized = String(status || 'unknown').toLowerCase();

  return (
    <span className={`bitl3-status-badge bitl3-status-${normalized} ${className}`.trim()}>
      {children}
    </span>
  );
}
