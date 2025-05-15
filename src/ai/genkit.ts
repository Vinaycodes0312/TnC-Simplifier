
import { config } from 'dotenv';
config(); // Load environment variables at the earliest point

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

console.log('Attempting to initialize GoogleAI plugin...');
if (process.env.GOOGLE_API_KEY) {
  console.log(`GOOGLE_API_KEY found in genkit.ts, length: ${process.env.GOOGLE_API_KEY.length}`);
} else {
  console.error('CRITICAL: GOOGLE_API_KEY is NOT found or is empty in genkit.ts. This will likely cause an Internal Server Error.');
}

export const ai = genkit({
  plugins: [
    googleAI({ apiKey: process.env.GOOGLE_API_KEY })
  ],
});
