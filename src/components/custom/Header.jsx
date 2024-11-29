import React from 'react'
import { Button } from '../ui/button'
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-lg">
      <img src="/logo.svg" alt="" />
      {isSignedIn ? (
        <Link to={"/dashboard"}>
          <div className='flex  gap-2 items-center'>
            <Button variant="outline">Dashboard</Button>
            <UserButton />
          </div>
        </Link>
      ) :
     <Link to={"/auth/sign-in"}>
      <Button>Get Started</Button>
      </Link>}
     
    </div>
  );
}

export default Header