import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  output: 'export',
  basePath: '/papercloud-docs',
  reactStrictMode: true,
};

export default withMDX(config);
