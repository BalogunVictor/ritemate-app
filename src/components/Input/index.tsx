import React, {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  forwardRef,
} from 'react';
import { type VariantProps, cva } from 'class-variance-authority';

const inputStyle = cva(
  'flex h-10 w-full items-center overflow-hidden rounded-md border transition-all focus-within:border-2',
  {
    defaultVariants: { intent: 'primary' },
    variants: {
      intent: {
        primary: 'border-2 border-black/40',
      },
    },
  }
);

type Props = VariantProps<typeof inputStyle> &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
    error?: string;
  };

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ intent, className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label != null && (
          <label className="text-sm font-medium">{label}</label>
        )}
        <div className={inputStyle({ className, intent })}>
          <input
            className="h-full w-full border-0 bg-transparent px-2 text-sm outline-0"
            {...props}
            ref={ref}
          />
        </div>
        {error != null && <p className="text-xs text-rose-700">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
