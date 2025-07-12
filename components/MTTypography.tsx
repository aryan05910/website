'use client';

import React from 'react';
import { Typography, type TypographyProps } from '@material-tailwind/react';

// Wrapper to satisfy strict TypeScript props requirements
export function MTTypography(props: TypographyProps) {
  return <Typography {...(props as TypographyProps)} />;
}
