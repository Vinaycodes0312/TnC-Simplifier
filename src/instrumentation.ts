
// src/instrumentation.ts
import type { InstrumentationOption } from '@opentelemetry/instrumentation';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { SimpleSpanProcessor, BatchSpanProcessor, type SpanProcessor } from '@opentelemetry/sdk-trace-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('Registering OpenTelemetry for Node.js runtime...');

    let spanProcessor: SpanProcessor | undefined = undefined;

    const jaegerEndpoint = process.env.OTEL_EXPORTER_JAEGER_ENDPOINT;
    const isDevelopment = process.env.NODE_ENV === 'development';

    if (jaegerEndpoint || isDevelopment) {
      try {
        const endpoint = jaegerEndpoint || 'http://localhost:14268/api/traces';
        const jaegerExporter = new JaegerExporter({ endpoint });

        spanProcessor =
          process.env.NODE_ENV === 'production'
            ? new BatchSpanProcessor(jaegerExporter)
            : new SimpleSpanProcessor(jaegerExporter);

        console.log(`Jaeger exporter configured for OpenTelemetry. Endpoint: ${endpoint}`);
      } catch (error) {
        console.error('Failed to initialize JaegerExporter. Tracing to Jaeger will be disabled for this session.', error);
        // If JaegerExporter fails to initialize, spanProcessor remains undefined.
        // The SDK will still start, but traces might not be exported to Jaeger.
      }
    } else {
      console.log('Jaeger exporter not configured for OpenTelemetry in this environment (OTEL_EXPORTER_JAEGER_ENDPOINT not set and not in development mode).');
    }

    const instrumentations: InstrumentationOption[] = [
      new HttpInstrumentation(),
      new FetchInstrumentation({
        // Disabling context propagation for fetch instrumentation
        // can sometimes help with Next.js specific fetch behaviors if issues arise.
        // propagateContextUrls: [/./], // Default is to propagate for all
        // clearTimingResources: true,
      }),
    ];

    const sdkConfig: ConstructorParameters<typeof NodeSDK>[0] = {
      resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'tc-simplifier',
        [SemanticResourceAttributes.SERVICE_VERSION]: process.env.npm_package_version || '0.1.0',
      }),
      instrumentations: instrumentations,
    };

    if (spanProcessor) {
      sdkConfig.spanProcessor = spanProcessor;
    } else {
      console.log('OpenTelemetry SDK starting without a Jaeger span processor. Traces may not be exported to Jaeger.');
    }
    
    const sdk = new NodeSDK(sdkConfig);

    try {
      sdk.start();
      console.log('OpenTelemetry SDK started.');
    } catch (error) {
      console.error('Error starting OpenTelemetry SDK:', error);
    }
    

    // Graceful shutdown
    process.on('SIGTERM', () => {
      sdk.shutdown()
        .then(() => console.log('OpenTelemetry SDK shut down successfully.'))
        .catch((error) => console.error('Error shutting down OpenTelemetry SDK:', error))
        .finally(() => process.exit(0));
    });
    process.on('SIGINT', () => {
      sdk.shutdown()
        .then(() => console.log('OpenTelemetry SDK shut down successfully (SIGINT).'))
        .catch((error) => console.error('Error shutting down OpenTelemetry SDK (SIGINT):', error))
        .finally(() => process.exit(0));
    });

  } else {
    console.log('Skipping OpenTelemetry registration for non-Node.js runtime:', process.env.NEXT_RUNTIME);
  }
}
