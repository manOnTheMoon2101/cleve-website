'use client';
import {
  motion,
  VariantLabels,
  Target,
  TargetAndTransition,
  Transition,
} from 'motion/react';
import React from 'react';

export type TextRollProps = {
  children: React.ReactNode;
  duration?: number;
  getEnterDelay?: (index: number) => number;
  getExitDelay?: (index: number) => number;
  className?: string;
  transition?: Transition;
  variants?: {
    enter: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
    exit: {
      initial: Target | VariantLabels | boolean;
      animate: TargetAndTransition | VariantLabels;
    };
  };

  onAnimationComplete?: () => void;
};

export function TextRoll({
  children,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.1,
  getExitDelay = (i) => i * 0.1 + 0.2,
  className,
  transition = { ease: 'easeIn' },
  variants,
  onAnimationComplete,
}: TextRollProps) {
  const defaultVariants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  } as const;

  // Render each child separately
  const renderContent = (child: React.ReactNode, index: number) => {
    if (typeof child === 'string') {
      // Handle text nodes
      return child.split('').map((letter, i) => (
        <span
          key={`${index}-${i}`}
          className='relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]'
          aria-hidden='true'
        >
          <motion.span
            className='absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]'
            initial={variants?.enter?.initial ?? defaultVariants.enter.initial}
            animate={variants?.enter?.animate ?? defaultVariants.enter.animate}
            transition={{
              ...transition,
              duration,
              delay: getEnterDelay(i),
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
          <motion.span
            className='absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]'
            initial={variants?.exit?.initial ?? defaultVariants.exit.initial}
            animate={variants?.exit?.animate ?? defaultVariants.exit.animate}
            transition={{
              ...transition,
              duration,
              delay: getExitDelay(i),
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
          <span className='invisible'>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        </span>
      ));
    }
    // Pass through JSX elements unchanged
    return child;
  };

  return (
    <span className={className}>
      {React.Children.map(children, (child, index) => renderContent(child, index))}
      <span className='sr-only'>{children}</span>
    </span>
  );
}
