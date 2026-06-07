import { useMemo, useState } from 'react';
import { Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { getDictionary, translate } from './i18n';

const invoice = {
  merchantName: 'Sanga Store',
  localAmount: '฿120.00',
  satsAmount: '≈ 6,500 sats',
  expiresIn: '14:32',
  invoiceText: 'lnbc6500mockinvoice'
};

export default function PaymentPage() {
  const [locale, setLocale] = useState('en');
  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const t = (key, values) => translate(dictionary, key, values);

  return (
    <main className="page-shell">
      <section className="payment-card" aria-labelledby="payment-title">
        <div className="top-row">
          <p className="eyebrow">{t('brand')}</p>
          <label className="language-switcher">
            <span className="visually-hidden">Language</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value)}>
              <option value="en">EN</option>
              <option value="th">ไทย</option>
            </select>
          </label>
        </div>

        <h1 id="payment-title">{t('payment.title', { merchantName: invoice.merchantName })}</h1>

        <div className="amount-block" aria-label="Payment amount">
          <span className="local-amount">{invoice.localAmount}</span>
          <span className="sats-amount">{invoice.satsAmount}</span>
        </div>

        <div className="status-card" role="status" aria-live="polite">
          <ShieldCheck size={20} aria-hidden="true" />
          <div>
            <span className="status-label">{t('payment.status.label')}</span>
            <strong>{t('payment.status.waiting')}</strong>
          </div>
        </div>

        <div className="qr-placeholder" aria-label={t('payment.qr.label')}>
          <div className="qr-grid" aria-hidden="true" />
          <span>{t('payment.qr.label')}</span>
        </div>

        <div className="actions">
          <button className="primary-button" type="button">
            <ExternalLink size={18} aria-hidden="true" />
            {t('payment.action.openWallet')}
          </button>
          <button className="secondary-button" type="button">
            <Copy size={18} aria-hidden="true" />
            {t('payment.action.copyInvoice')}
          </button>
        </div>

        <p className="expiry">{t('payment.expiresIn', { time: invoice.expiresIn })}</p>

        <details className="help-box">
          <summary>{t('payment.help.title')}</summary>
          <p>{t('payment.help.body')}</p>
        </details>

        <details className="advanced-box">
          <summary>{t('payment.advanced.title')}</summary>
          <p className="mono">{invoice.invoiceText}</p>
        </details>
      </section>
    </main>
  );
}
