
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
  serverExternalPackages: [
    '@opentelemetry/exporter-jaeger',
    '@grpc/grpc-js',
    '@opentelemetry/sdk-node', // Core SDK for Node.js, can pull in various exporters
    '@opentelemetry/otlp-grpc-exporter-base', // Source of 'fs' module not found
    'jaeger-client', // Dependency of exporter-jaeger
    '@opentelemetry/exporter-trace-otlp-grpc', // For 'fs' error via OTLP gRPC path
    'hexer', // For 'stream' error via jaeger-client path
    'handlebars', // Added to address webpack 'require.extensions' issue
    'dotprompt', // Added as it's the direct dependent on handlebars in the trace
    '@grpc/proto-loader', // Added for fs/path errors
    'thriftrw', // Added for fs/path errors (dependency of jaeger-client)
  ],
  webpack: (config, { isServer }) => {
    // Add fallbacks for Node.js core modules to prevent build errors
    // in environments where they are not available (e.g., client-side or during analysis).
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}), // Spread existing fallbacks if any
        fs: false,
        path: false,
        stream: false,
        tls: false,
        net: false,
        zlib: false,
        crypto: false, 
        os: false,
        http: false,
        https: false,
        child_process: false,
        vm: false,
      };
    }
    return config;
  },
};

export default nextConfig;
