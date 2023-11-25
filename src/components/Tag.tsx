import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const tagstyle = cva('h-[100px] w-[260px] text-lg font-medium rounded-xl', {
  defaultVariants: {
    variants: 'primary',
  },
  variants: {
    pointer: {
      true: '',
    },
    variants: {
      primary: 'bg-[#17478F] text-white',
      secondary: 'bg-[#E8E8E8]',
      tertiary: 'bg-yellow-500 text-black',
    },
  },
});

type Props = VariantProps<typeof tagstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Tag = ({
  children,
  className,
  variants,
  pointer,
  ...rest
}: Props) => {
  const style = tagstyle({ className, pointer, variants, ...rest });
  return (
    <div className="flex flex-col items-center">
      <div className={classNames(style, className)} {...rest}>
        <div className="h-full w-full">
          <div className="flex h-full items-center justify-center gap-2">
            <FaRegDotCircle />
            <span className="">{children}</span>
          </div>
        </div>
      </div>
      {pointer && (
        <svg
          fill="none"
          height="24"
          viewBox="0 0 48 24"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 23.9922L0 -0.0078125H48L24 23.9922Z" fill="#17478F" />
        </svg>
      )}
    </div>
  );
};

export default Tag;
