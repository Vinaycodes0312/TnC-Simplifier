import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI() // Relies on GOOGLE_API_KEY from environment; prompts should specify their model.
  ],
});
