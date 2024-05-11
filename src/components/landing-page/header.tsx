import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/cypresslogo.svg';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className="p-4 flex justify-center items-center">
      <Link href={'/'} className="w-full flex gap-2 justify-left items-center">
        <Image src={Logo} alt="Cypress logo" width={25} height={25} />
        <span className="font-semibold dark:text-white">cypress.</span>
      </Link>

      <aside className="flex w-full gap-2 justify-end">
        <Link href="/login">
          <Button variant="btn-secondary" className="p-1 hidden sm:block">
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="btn-primary" className="whitespace-nowrap">
            Sign up
          </Button>
        </Link>
      </aside>
    </header>
  );
};

export default Header;
