import { KeyRound, Link2, Settings, Webhook } from 'lucide-react';

const summary = {
  received: '฿8,420.00',
  payments: 37,
  pending: 4
};

const payments = [
  { id: '#1024', amount: '฿120.00', status: 'Paid', time: '10:42' },
  { id: '#1023', amount: '฿89.00', status: 'Pending', time: '10:35' },
  { id: '#1022', amount: '฿450.00', status: 'Paid', time: '10:12' }
];

export default function App() {
  return (
    <main className="dashboard-shell">
      <section className="dashboard-card" aria-labelledby="dashboard-title">
        <p className="eyebrow">BitL3 Merchant</p>
        <h1 id="dashboard-title">Today</h1>

        <div className="summary-grid" aria-label="Today summary">
          <article className="summary-card summary-primary">
            <span>Received</span>
            <strong>{summary.received}</strong>
          </article>
          <article className="summary-card">
            <span>Payments</span>
            <strong>{summary.payments}</strong>
          </article>
          <article className="summary-card">
            <span>Pending</span>
            <strong>{summary.pending}</strong>
          </article>
        </div>

        <button className="primary-button" type="button">
          <Link2 size={18} aria-hidden="true" />
          Create Payment Request
        </button>

        <section className="panel" aria-labelledby="recent-payments-title">
          <h2 id="recent-payments-title">Recent Payments</h2>
          <div className="payment-list">
            {payments.map((payment) => (
              <article className="payment-row" key={payment.id}>
                <div>
                  <strong>{payment.id}</strong>
                  <span>{payment.time}</span>
                </div>
                <div>
                  <strong>{payment.amount}</strong>
                  <span className={`status-pill status-${payment.status.toLowerCase()}`}>{payment.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          <a href="#api-keys"><KeyRound size={18} aria-hidden="true" /> API Keys</a>
          <a href="#webhooks"><Webhook size={18} aria-hidden="true" /> Webhooks</a>
          <a href="#settings"><Settings size={18} aria-hidden="true" /> Settings</a>
        </nav>
      </section>
    </main>
  );
}
