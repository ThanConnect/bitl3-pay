import { useEffect, useState } from 'react';
import DashboardPage from './DashboardPage.jsx';
import DeveloperPage from './DeveloperPage.jsx';
import DocsPage from './DocsPage.jsx';
import HomePage from './HomePage.jsx';
import PaymentPage from './PaymentPage.jsx';
import ReceiptPage from './ReceiptPage.jsx';

function getRouteFromHash() {
  return window.location.hash.replace('#', '') || 'home';
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (route === 'pay') {
    return <PaymentPage />;
  }

  if (route === 'receipt') {
    return <ReceiptPage />;
  }

  if (route === 'dashboard') {
    return <DashboardPage />;
  }

  if (route === 'developers') {
    return <DeveloperPage />;
  }

  if (route === 'docs') {
    return <DocsPage />;
  }

  return <HomePage />;
}
