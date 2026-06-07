import { ArrowRight, BookOpen, Code2, LayoutDashboard, Wallet } from 'lucide-react';

const links = [
  {
    href: '#pay',
    icon: Wallet,
    title: 'Make a payment',
    description: 'Open the simple payment experience for users.'
  },
  {
    href: '#dashboard',
    icon: LayoutDashboard,
    title: 'Merchant dashboard',
    description: 'View payments, revenue, API keys, and webhooks.'
  },
  {
    href: '#developers',
    icon: Code2,
    title: 'Developers',
    description: 'Integrate invoices, webhooks, and settlement APIs.'
  },
  {
    href: '#docs',
    icon: BookOpen,
    title: 'Documentation',
    description: 'Learn how BitL3 works and how to start building.'
  }
];

export default function HomePage() {
  return (
    <main className="page-shell home-shell">
      <section className="payment-card home-card" aria-labelledby="home-title">
        <p className="eyebrow">BitL3</p>
        <h1 id="home-title">Universal Open Payment Ecosystem</h1>
        <p className="home-lede">
          Simple global payments for users, merchants, and developers powered by Bitcoin infrastructure.
        </p>

        <div className="home-links">
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
