import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonstyle = cva('h-10 w-full rounded-full  text-base', {
  defaultVariants: {
    size: 'sm',
    variants: 'primary',
  },
  variants: {
    size: {
      md: 'py-2 px-4',
      sm: 'p-2',
    },
    variants: {
      primary: 'bg-[#17478F] text-white',
      secondary: 'bg-[#12A8AC] text-white',
      tertiary: 'bg-yellow-500 text-black',
    },
  },
});

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  variants,
  size,
  className,
  children,
  ...rest
}: Props) => {
  const style = buttonstyle({ className, size, variants });
  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
