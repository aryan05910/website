// components/MTTypography.tsx
'use client';

import React from 'react';
import { Typography } from '@material-tailwind/react';

// Wrapper to satisfy strict TypeScript props requirements
export function MTTypography(props: React.ComponentProps<typeof Typography>) {
  return <Typography {...props} />;
}
