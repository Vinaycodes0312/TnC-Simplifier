
import { config } from 'dotenv';
config(); // Load environment variables at the earliest point

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI()
  ],
});
