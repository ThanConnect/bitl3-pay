export function AmountDisplay({ localAmount, secondaryAmount, className = '' }) {
  return (
    <div className={`bitl3-amount-display ${className}`.trim()} aria-label="Amount">
      <span className="bitl3-local-amount">{localAmount}</span>
      {secondaryAmount ? <span className="bitl3-secondary-amount">{secondaryAmount}</span> : null}
    </div>
  );
}
