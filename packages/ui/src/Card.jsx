export function Card({ children, className = '', as: Component = 'section', ...props }) {
  return (
    <Component className={`bitl3-card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
