import { Code2, Copy, Webhook } from 'lucide-react';

export default function DeveloperPage() {
  return (
    <main className="page-shell">
      <section className="payment-card home-card" aria-labelledby="developer-title">
        <p className="eyebrow">BitL3 Developers</p>
        <h1 id="developer-title">Integrate payments in minutes</h1>
        <p className="home-lede">Create invoices, listen for settlement events, and query ledger entries with simple APIs.</p>

        <div className="home-links">
          <a className="home-link" href="#docs">
            <Code2 size={22} aria-hidden="true" />
            <span>
              <strong>Quickstart</strong>
              <small>Use one API call to create a payment request.</small>
            </span>
          </a>
          <a className="home-link" href="#docs">
            <Webhook size={22} aria-hidden="true" />
            <span>
              <strong>Webhooks</strong>
              <small>Receive events when invoices are created or settled.</small>
            </span>
          </a>
        </div>

        <pre className="code-block"><code>{`POST /v1/invoices
{
  "amountSats": 1000,
  "memo": "Order #1001"
}`}</code></pre>

        <a className="primary-link-button" href="#docs">
          <Copy size={18} aria-hidden="true" />
          View API docs
        </a>
      </section>
    </main>
  );
}
