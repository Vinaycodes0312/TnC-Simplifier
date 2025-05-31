
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
    '@opentelemetry/sdk-node', // Core SDK for Node.js, can pull in various exporters
    '@opentelemetry/otlp-grpc-exporter-base', // Source of 'fs' module not found
    'jaeger-client', // Dependency of exporter-jaeger
    '@opentelemetry/exporter-trace-otlp-grpc', // For 'fs' error via OTLP gRPC path
    'hexer', // For 'stream' error via jaeger-client path
  ],
};

export default nextConfig;
