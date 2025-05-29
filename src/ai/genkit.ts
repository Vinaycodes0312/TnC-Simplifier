
import { config } from 'dotenv';
config(); // Load environment variables at the earliest point

import {genkit, type GenkitPlugin} from 'genkit'; // Import GenkitPlugin
import {googleAI} from '@genkit-ai/googleai';

console.log('--- Genkit Initialization ---');
console.log('Checking GOOGLE_API_KEY before configuring Genkit plugins...');

const plugins: GenkitPlugin[] = []; // Define type for plugins array

if (process.env.GOOGLE_API_KEY) {
  console.log(`GOOGLE_API_KEY found, length: ${process.env.GOOGLE_API_KEY.length}. Adding GoogleAI plugin.`);
  plugins.push(googleAI({ apiKey: process.env.GOOGLE_API_KEY }));
} else {
  console.error('CRITICAL: GOOGLE_API_KEY is NOT found or is empty. GoogleAI plugin will NOT be initialized. AI features will not work. Please set this environment variable in your Vercel project settings.');
}

export const ai = genkit({
  plugins: plugins, // Use the conditionally populated plugins array
});

if (plugins.some(p => p.name === 'google-ai')) { // Check if googleAI plugin was actually added
  console.log('Genkit configured with GoogleAI plugin.');
} else {
  console.warn('Genkit configured WITHOUT GoogleAI plugin due to missing API key. AI functionality will be disabled.');
}
