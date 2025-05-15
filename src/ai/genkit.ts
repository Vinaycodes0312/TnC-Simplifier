import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({ model: 'gemini-1.5-flash-latest' }) // Set 'gemini-1.5-flash-latest' as a default model for the plugin
  ],
});
