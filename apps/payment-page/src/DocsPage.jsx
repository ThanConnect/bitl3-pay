import { BookOpen, KeyRound, ReceiptText, Webhook } from 'lucide-react';

const docs = [
  {
    icon: KeyRound,
    title: 'Authentication',
    body: 'Use a bearer API key to create invoices and query payment status.'
  },
  {
    icon: ReceiptText,
    title: 'Invoices',
    body: 'Create payment requests, show the payment page, and track settlement.'
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    body: 'Receive invoice.created, invoice.settled, and invoice.expired events.'
  }
];

export default function DocsPage() {
  return (
    <main className="page-shell">
      <section className="payment-card home-card" aria-labelledby="docs-title">
        <p className="eyebrow">BitL3 Docs</p>
        <h1 id="docs-title">Build with simple payment primitives</h1>
        <p className="home-lede">Start with invoices, payment links, receipts, ledger entries, and webhook events.</p>

        <div className="home-links">
          {docs.map((item) => {
            const Icon = item.icon;
            return (
              <article className="home-link" key={item.title}>
                <Icon size={22} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.body}</small>
                </span>
              </article>
            );
          })}
        </div>

        <a className="primary-link-button" href="#developers">
          <BookOpen size={18} aria-hidden="true" />
          Back to developer portal
        </a>
      </section>
    </main>
  );
}
