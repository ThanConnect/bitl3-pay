import { useEffect, useState } from 'react';
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

  return <HomePage />;
}
