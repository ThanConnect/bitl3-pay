export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variantClass = variant === 'secondary' ? 'bitl3-button-secondary' : 'bitl3-button-primary';

  return (
    <button className={`bitl3-button ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
