'use client';

import {
  motion as framerMotion,
  AnimatePresence as FramerAnimatePresence,
  MotionProps,
} from 'framer-motion';
import React from 'react';

// Create proper type definitions for HTML elements with motion props
type HTMLMotionProps<T extends keyof React.JSX.IntrinsicElements> = 
  React.ComponentPropsWithRef<T> & MotionProps;

// Export properly typed motion components
export const motion = {
  div: framerMotion.div as React.FC<HTMLMotionProps<'div'>>,
  span: framerMotion.span as React.FC<HTMLMotionProps<'span'>>,
  header: framerMotion.header as React.FC<HTMLMotionProps<'header'>>,
  section: framerMotion.section as React.FC<HTMLMotionProps<'section'>>,
  ul: framerMotion.ul as React.FC<HTMLMotionProps<'ul'>>,
  li: framerMotion.li as React.FC<HTMLMotionProps<'li'>>,
};

// Export AnimatePresence
export const AnimatePresence = FramerAnimatePresence;

// Common animation variants for reuse
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};
