import { Copy, ExternalLink, ShieldCheck } from 'lucide-react';

const invoice = {
  merchantName: 'Sanga Store',
  localAmount: '฿120.00',
  satsAmount: '≈ 6,500 sats',
  status: 'Waiting for payment',
  expiresIn: '14:32',
  invoiceText: 'lnbc6500mockinvoice'
};

export default function App() {
  return (
    <main className="page-shell">
      <section className="payment-card" aria-labelledby="payment-title">
        <p className="eyebrow">BitL3 Pay</p>
        <h1 id="payment-title">Pay {invoice.merchantName}</h1>

        <div className="amount-block" aria-label="Payment amount">
          <span className="local-amount">{invoice.localAmount}</span>
          <span className="sats-amount">{invoice.satsAmount}</span>
        </div>

        <div className="status-card" role="status" aria-live="polite">
          <ShieldCheck size={20} aria-hidden="true" />
          <div>
            <span className="status-label">Status</span>
            <strong>{invoice.status}</strong>
          </div>
        </div>

        <div className="qr-placeholder" aria-label="Payment QR code placeholder">
          <div className="qr-grid" aria-hidden="true" />
          <span>QR Code</span>
        </div>

        <div className="actions">
          <button className="primary-button" type="button">
            <ExternalLink size={18} aria-hidden="true" />
            Open Wallet
          </button>
          <button className="secondary-button" type="button">
            <Copy size={18} aria-hidden="true" />
            Copy Invoice
          </button>
        </div>

        <p className="expiry">Expires in {invoice.expiresIn}</p>

        <details className="help-box">
          <summary>Need help?</summary>
          <p>You can pay with any supported Lightning wallet. Scan the QR code or open your wallet directly.</p>
        </details>

        <details className="advanced-box">
          <summary>Advanced details</summary>
          <p className="mono">{invoice.invoiceText}</p>
        </details>
      </section>
    </main>
  );
}
