import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mu Isekai | Market Place',
};

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
