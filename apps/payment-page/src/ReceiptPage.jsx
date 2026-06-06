import { CheckCircle, Download, Share2 } from 'lucide-react';
import { getDictionary, translate } from './i18n';

const receipt = {
  merchantName: 'Sanga Store',
  localAmount: '฿120.00',
  satsAmount: '≈ 6,500 sats',
  receiptId: 'rcpt_123456',
  paidAt: '2026-06-06 23:10',
  paymentHash: 'mock_payment_hash_123'
};

export default function ReceiptPage({ locale = 'en' }) {
  const dictionary = getDictionary(locale);
  const t = (key, values) => translate(dictionary, key, values);

  return (
    <main className="page-shell">
      <section className="payment-card" aria-labelledby="receipt-title">
        <p className="eyebrow">{t('brand')}</p>

        <div className="receipt-success" role="status" aria-live="polite">
          <CheckCircle size={34} aria-hidden="true" />
          <div>
            <h1 id="receipt-title">Payment complete</h1>
            <p>You paid {receipt.merchantName}</p>
          </div>
        </div>

        <div className="amount-block" aria-label="Paid amount">
          <span className="local-amount">{receipt.localAmount}</span>
          <span className="sats-amount">{receipt.satsAmount}</span>
        </div>

        <dl className="receipt-list">
          <div>
            <dt>Receipt ID</dt>
            <dd>{receipt.receiptId}</dd>
          </div>
          <div>
            <dt>Paid at</dt>
            <dd>{receipt.paidAt}</dd>
          </div>
        </dl>

        <div className="actions">
          <button className="primary-button" type="button">
            <Download size={18} aria-hidden="true" />
            Download Receipt
          </button>
          <button className="secondary-button" type="button">
            <Share2 size={18} aria-hidden="true" />
            Share Receipt
          </button>
        </div>

        <details className="advanced-box">
          <summary>Advanced details</summary>
          <p className="mono">{receipt.paymentHash}</p>
        </details>
      </section>
    </main>
  );
}
