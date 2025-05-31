
import { config } from 'dotenv';
config(); // Load environment variables at the earliest point

import {genkit, type GenkitPlugin} from 'genkit'; // Import GenkitPlugin
import {googleAI} from '@genkit-ai/googleai';

console.log('--- Genkit Initialization ---');
console.log('Checking GOOGLE_API_KEY before configuring Genkit plugins...');

const plugins: GenkitPlugin[] = []; // Define type for plugins array

if (process.env.GOOGLE_API_KEY) {
  console.log('GOOGLE_API_KEY found. Attempting to initialize and add GoogleAI plugin.');
  try {
    // Wrap the plugin instantiation in a try...catch
    plugins.push(googleAI({ apiKey: process.env.GOOGLE_API_KEY }));
    console.log('GoogleAI plugin successfully added to plugins list.');
  } catch (e: any) {
    console.error('CRITICAL: Error initializing GoogleAI plugin itself. This could be due to an invalid API key or a problem with the Google AI service configuration. AI features will likely fail.', e);
    // Continues with an empty plugins array if googleAI() instantiation fails
  }
} else {
  console.warn('WARNING: GOOGLE_API_KEY is NOT found or is empty in environment variables. GoogleAI plugin will NOT be initialized. AI features will not work. Please set this environment variable.');
}

export const ai = genkit({
  plugins: plugins, // Use the plugins array (might be empty if API key issue)
});

if (plugins.some(p => p.name === 'google-ai')) {
  console.log('Genkit configured with GoogleAI plugin.');
} else {
  console.warn('Genkit configured WITHOUT GoogleAI plugin. This might be due to a missing API key or an error during GoogleAI plugin initialization. AI functionality will be disabled or fail.');
}

