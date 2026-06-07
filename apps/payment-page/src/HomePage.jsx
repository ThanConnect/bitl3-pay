import { ArrowRight, BookOpen, Code2, Globe2, LayoutDashboard, Wallet } from 'lucide-react';

const links = [
  {
    href: '#pay',
    icon: Wallet,
    title: 'Make a payment',
    description: 'Open a clear payment link with QR, wallet actions, status, and receipt flow.'
  },
  {
    href: '#dashboard',
    icon: LayoutDashboard,
    title: 'Merchant dashboard',
    description: 'Track revenue, pending payments, API keys, webhooks, and reports.'
  },
  {
    href: '#developers',
    icon: Code2,
    title: 'Developers',
    description: 'Integrate invoices, settlement events, webhooks, and ledger APIs.'
  },
  {
    href: '#docs',
    icon: BookOpen,
    title: 'Documentation',
    description: 'Learn the product model, API primitives, and global payment flow.'
  }
];

export default function HomePage() {
  return (
    <main className="page-shell home-shell">
      <section className="payment-card home-card" aria-labelledby="home-title">
        <div className="hero-grid">
          <div>
            <span className="hero-badge"><Globe2 size={16} aria-hidden="true" /> Global payment demo</span>
            <p className="eyebrow">BitL3</p>
            <h1 id="home-title">Open payments for everyone.</h1>
            <p className="home-lede">
              A universal payment experience for people, merchants, and developers. Simple on the surface,
              powered by Bitcoin infrastructure underneath.
            </p>
            <div className="hero-actions">
              <a className="primary-link-button" href="#pay">Start paying <ArrowRight size={18} aria-hidden="true" /></a>
              <a className="secondary-link-button" href="#developers">Start building</a>
            </div>
          </div>

          <aside className="hero-preview" aria-label="Payment preview">
            <div className="hero-preview-inner">
              <p className="eyebrow">Live payment preview</p>
              <strong>Sanga Store</strong>
              <span className="preview-amount">฿120.00</span>
              <span>≈ 6,500 sats</span>
              <span className="preview-status">Waiting for payment</span>
            </div>
          </aside>
        </div>

        <div className="home-links" aria-label="BitL3 sections">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a className="home-link" href={link.href} key={link.href}>
                <Icon size={22} aria-hidden="true" />
                <span>
                  <strong>{link.title}</strong>
                  <small>{link.description}</small>
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
