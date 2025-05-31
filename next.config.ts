
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Corrected: serverExternalPackages should be a top-level property.
  // This informs Next.js how to handle these packages in server environments.
  serverExternalPackages: [
    '@opentelemetry/exporter-jaeger',
    '@grpc/grpc-js',
    '@opentelemetry/sdk-node', // Added: Core SDK for Node.js, can pull in various exporters
    '@opentelemetry/otlp-grpc-exporter-base', // Added: Source of 'fs' module not found
    'jaeger-client', // Added: Dependency of exporter-jaeger, source of 'stream' module not found via 'hexer'
  ],
};

export default nextConfig;
