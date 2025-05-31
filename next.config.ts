
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
  webpack: (config, { isServer, webpack }) => { // Added webpack to params for potential future use of webpack.IgnorePlugin etc.
    if (isServer) {
      // Ensure config.externals is an array to safely push new externals.
      // Next.js might initialize config.externals in different ways.
      if (!Array.isArray(config.externals)) {
        config.externals = config.externals ? [config.externals] : [];
      }

      // Add a function to handle Node.js built-in modules more robustly.
      // This tells Webpack that these modules are provided by the Node.js environment
      // and should not be bundled.
      config.externals.push(function ({ context, request }, callback) {
        // Get all built-in modules in Node.js
        const nodeBuiltins = require('module').builtinModules;
        if (nodeBuiltins.includes(request)) {
          return callback(null, 'commonjs ' + request);
        }
        // For other requests, call callback without arguments to let Webpack handle them normally.
        callback();
      });
    } else {
      // For client-side builds or other non-Node.js environments,
      // provide fallbacks for Node.js core modules to prevent build errors.
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}), // Spread existing fallbacks if any
        fs: false,
        path: false,
        stream: false, // Using false as these are primarily server-side for this app's context
        tls: false,
        net: false,
        zlib: false,
        crypto: false,
        os: false,
        http: false,
        https: false,
        child_process: false,
        vm: false,
        events: false, // 'events' is another common one
      };
    }
    return config;
  },
};

export default nextConfig;
