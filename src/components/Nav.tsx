import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  invert?: boolean;
}

const Nav = ({ className, invert }: Props) => {
  return (
    <div
      className={classNames(
        'h-12 w-full bg-[#12A8AC] text-base text-white',
        { 'bg-[#17478F]': invert },
        className
      )}
    >
      <ul className="flex h-full items-center gap-8 px-12">
        <li>About</li>
        <li>Program</li>
        <li>Registration</li>
        <li>Sponsors</li>
        <li>Exhibit</li>
      </ul>
    </div>
  );
};

export default Nav;
