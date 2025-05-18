
// src/instrumentation.ts
import type { InstrumentationOption } from '@opentelemetry/instrumentation';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { SimpleSpanProcessor, BatchSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('Registering OpenTelemetry for Node.js runtime...');

    const jaegerExporter = new JaegerExporter({
      endpoint: process.env.OTEL_EXPORTER_JAEGER_ENDPOINT || 'http://localhost:14268/api/traces',
    });

    const spanProcessor = process.env.NODE_ENV === 'production' 
      ? new BatchSpanProcessor(jaegerExporter) 
      : new SimpleSpanProcessor(jaegerExporter);

    const instrumentations: InstrumentationOption[] = [
      new HttpInstrumentation(),
      new FetchInstrumentation({
        // Disabling context propagation for fetch instrumentation
        // can sometimes help with Next.js specific fetch behaviors if issues arise.
        // propagateContextUrls: [/./], // Default is to propagate for all
        // clearTimingResources: true,
      }),
    ];
    
    const sdk = new NodeSDK({
      resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'tc-simplifier',
        [SemanticResourceAttributes.SERVICE_VERSION]: process.env.npm_package_version || '0.1.0',
      }),
      spanProcessor: spanProcessor,
      instrumentations: instrumentations,
    });

    try {
      sdk.start();
      console.log('OpenTelemetry SDK started with Jaeger exporter.');
      console.log(`Jaeger exporter endpoint: ${process.env.OTEL_EXPORTER_JAEGER_ENDPOINT || 'http://localhost:14268/api/traces'}`);
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
