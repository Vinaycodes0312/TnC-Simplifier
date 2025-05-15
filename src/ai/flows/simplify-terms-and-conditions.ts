
'use server';

/**
 * @fileOverview Terms and Conditions Simplifier AI agent.
 *
 * - simplifyTermsAndConditions - A function that handles the terms and conditions simplification process.
 * - SimplifyTermsAndConditionsInput - The input type for the simplifyTermsAndConditions function.
 * - SimplifyTermsAndConditionsOutput - The return type for the simplifyTermsAndConditions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimplifyTermsAndConditionsInputSchema = z.object({
  url: z.string().describe('The URL of the terms and conditions page.'),
  language: z.string().describe('The target language for the summary (e.g., "English", "Spanish", "French").')
});
export type SimplifyTermsAndConditionsInput = z.infer<
  typeof SimplifyTermsAndConditionsInputSchema
>;

const SimplifyTermsAndConditionsOutputSchema = z.object({
  summary: z
    .string()
    .describe('A simplified, bullet-point summary of the terms and conditions in the specified language.'),
});
export type SimplifyTermsAndConditionsOutput = z.infer<
  typeof SimplifyTermsAndConditionsOutputSchema
>;

export async function simplifyTermsAndConditions(
  input: SimplifyTermsAndConditionsInput
): Promise<SimplifyTermsAndConditionsOutput> {
  return simplifyTermsAndConditionsFlow(input);
}

const simplifyTermsPrompt = ai.definePrompt({
  name: 'simplifyTermsAndConditionsPrompt',
  model: 'googleai/gemini-1.5-flash-latest', // Ensure this model is appropriate and available
  input: {schema: SimplifyTermsAndConditionsInputSchema},
  output: {schema: SimplifyTermsAndConditionsOutputSchema},
  prompt: `You are an expert legal summarizer. You will be provided with the URL for a terms and conditions page. Your job is to extract the salient points and summarize them in a bullet-point format that is easy to understand, in {{language}}. Be sure to include important legal stipulations and user obligations.

URL: {{{url}}}
Language for summary: {{language}}`,
});

const simplifyTermsAndConditionsFlow = ai.defineFlow(
  {
    name: 'simplifyTermsAndConditionsFlow',
    inputSchema: SimplifyTermsAndConditionsInputSchema,
    outputSchema: SimplifyTermsAndConditionsOutputSchema,
  },
  async (input: SimplifyTermsAndConditionsInput) => {
    const {output} = await simplifyTermsPrompt(input);
    
    if (output === undefined) {
      console.error('AI prompt call failed to return a structured output. Input was:', JSON.stringify(input, null, 2));
      // Consider inspecting the full response if Genkit provides more details on failure
      throw new Error('The AI model did not produce a summary. This could be due to content restrictions, an issue with the provided URL, or a temporary model problem.');
    }
    return output;
  }
);

// This was a temporary structure for debugging direct ai.generate calls.
// Keeping it commented out for reference if needed, but the flow now uses the defined prompt.
/*
const simplifyTermsAndConditionsFlow = ai.defineFlow(
  {
    name: 'simplifyTermsAndConditionsFlow',
    inputSchema: SimplifyTermsAndConditionsInputSchema,
    outputSchema: SimplifyTermsAndConditionsOutputSchema,
  },
  async (input: SimplifyTermsAndConditionsInput) => {
    const promptText = `You are an expert legal summarizer. You will be provided with the URL for a terms and conditions page. Your job is to extract the salient points and summarize them in a bullet-point format that is easy to understand, in ${input.language}. Be sure to include important legal stipulations and user obligations.

URL: ${input.url}
Language for summary: ${input.language}`;

    const result = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      prompt: promptText,
      output: {
        schema: SimplifyTermsAndConditionsOutputSchema,
      },
      config: {} // Empty config, or specify temperature, etc. if needed
    });
    
    const structuredOutput = result.output;

    if (structuredOutput === undefined) {
      console.error('AI generate call failed to return a structured output. Full result:', JSON.stringify(result, null, 2));
      throw new Error('The AI model did not produce a summary. This could be due to content restrictions, an issue with the provided URL, or a temporary model problem.');
    }
    return structuredOutput as SimplifyTermsAndConditionsOutput;
  }
);
*/
