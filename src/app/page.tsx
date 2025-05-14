// This file is effectively removed and replaced by src/app/[locale]/page.tsx
// You can delete this file if it's no longer needed by Next.js routing (e.g. as a redirect source)
// For now, keeping it minimal or redirecting might be an option if direct access to / is expected.

// Option 1: Basic redirect component (if needed, often middleware handles this)
// import { redirect } from 'next/navigation';
// import { DEFAULT_LOCALE } from '@/app/i18n/settings';

// export default function RootPage() {
//   redirect(`/${DEFAULT_LOCALE}`);
// }


// Option 2: Or just an empty component if middleware handles the root path
export default function RootPage() {
  return null; 
}
