
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
  model: 'googleai/gemini-1.5-flash-latest', 
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
    console.log(`Entering simplifyTermsAndConditionsFlow with input: ${JSON.stringify(input)}`);
    let output;
    try {
      const response = await simplifyTermsPrompt(input);
      output = response.output;

      if (output === undefined) {
        console.error(
          'AI prompt call returned undefined output. Input was:',
          JSON.stringify(input, null, 2),
          'Full response object:', JSON.stringify(response, null, 2)
        );
        throw new Error(
          'The AI model did not produce a valid summary structure. Please check the input URL or try again.'
        );
      }
      console.log(`AI prompt successfully returned output (structure check passed).`);
      return output;
    } catch (e: any) {
      console.error('--- ERROR IN simplifyTermsAndConditionsFlow ---');
      console.error('Type of error caught:', typeof e);
      console.error('Raw error object caught in flow:', e);
      
      let detailedErrorMessage = "Unknown AI service error.";
      if (e instanceof Error) {
        console.error('Error name:', e.name);
        console.error('Error message:', e.message);
        console.error('Error stack:', e.stack);
        detailedErrorMessage = e.message;
      } else if (typeof e === 'string') {
        detailedErrorMessage = e;
      } else if (typeof e === 'object' && e !== null && e.message) {
        detailedErrorMessage = e.message;
      }

      let userFriendlyMessage = 'An AI service error occurred. Please check server logs for more details.';
      
      if (detailedErrorMessage.includes('API key not valid') || detailedErrorMessage.includes('API_KEY_INVALID')) {
        userFriendlyMessage = 'AI Service Error: The API key is not valid. Please verify your GOOGLE_API_KEY configuration.';
      } else if (detailedErrorMessage.toLowerCase().includes('quota')) {
          userFriendlyMessage = 'AI Service Error: API quota exceeded. Please check your usage limits.';
      } else if (detailedErrorMessage.toLowerCase().includes('timed out') || detailedErrorMessage.toLowerCase().includes('timeout')) {
          userFriendlyMessage = 'AI Service Error: The request to the AI service timed out.';
      } else if (detailedErrorMessage.includes('Must supply a `model`')) {
          userFriendlyMessage = 'AI Configuration Error: Model not correctly specified for the AI call.';
      } else if (detailedErrorMessage.includes('models/gemini-1.5-flash-latest is not found for API version v1beta') || detailedErrorMessage.includes('not found for API version v1beta')) {
          userFriendlyMessage = 'AI Service Error: The specified model (gemini-1.5-flash-latest) was not found. Check model availability or Genkit plugin configuration.';
      } else {
          userFriendlyMessage = `AI Service Error: ${String(detailedErrorMessage).split('\n')[0]}. Check server logs for full details.`;
      }
      
      console.error('Re-throwing error from flow with user-friendly message:', userFriendlyMessage);
      throw new Error(userFriendlyMessage);
    }
  }
);

