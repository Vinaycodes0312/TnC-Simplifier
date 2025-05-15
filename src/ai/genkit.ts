
import { config } from 'dotenv';
config(); // Load environment variables at the earliest point

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

console.log('--- Genkit Initialization ---');
console.log('Checking GOOGLE_API_KEY before configuring Genkit plugins...');
if (process.env.GOOGLE_API_KEY) {
  console.log(`GOOGLE_API_KEY found, length: ${process.env.GOOGLE_API_KEY.length}. Will attempt to use it for GoogleAI plugin.`);
} else {
  console.error('CRITICAL: GOOGLE_API_KEY is NOT found or is empty. This will cause an Internal Server Error. Please set it in your .env file and restart the server.');
}

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: process.env.GOOGLE_API_KEY })
  ],
});

console.log('Genkit configured with GoogleAI plugin.');
