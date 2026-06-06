const baseUrl = process.env.BITL3_API_URL || 'http://localhost:3000';
const apiKey = process.env.BITL3_API_KEY || 'bitl3_test_key';

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(`${options.method || 'GET'} ${path} failed: ${response.status} ${text}`);
  }

  return body;
}

async function main() {
  const health = await request('/health', { headers: { authorization: undefined } });
  console.log('health:', health);

  const invoice = await request('/v1/invoices', {
    method: 'POST',
    body: JSON.stringify({ amountSats: 1000, memo: 'smoke test' })
  });
  console.log('created invoice:', invoice.id);

  const fetched = await request(`/v1/invoices/${invoice.id}`);
  console.log('fetched invoice:', fetched.status);

  const settled = await request(`/v1/invoices/${invoice.id}/settle`, { method: 'POST' });
  console.log('settled invoice:', settled.status);

  const ledger = await request(`/v1/invoices/${invoice.id}/ledger`);
  console.log('ledger entries:', ledger.entries.length);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
