import React from 'react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className, strokeWidth = 1 }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon className={className} strokeWidth={strokeWidth} />;
};