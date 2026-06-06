// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {}, // Turbopack options
};

export default withNextIntl(nextConfig);
