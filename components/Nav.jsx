"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";



export default function Nav() {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

 
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
    
  }, []);

 
  const SignInButtons = () => (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="black_btn bg-light-blue"
          >
            Sign In
          </button>
        ))}
    </>
  );

  return (
    <nav className="flex-between w-full mb-16 mt-5 pt-2">
      <Link href="/" className=" flex gap-3 flex-center">
        <Image
          width={30}
          height={30}
          className=" object-contain"
          src="/assets/images/logo.svg"
          alt="PromptGenius Logo"
        />
        <p className="logo_text">PromptGenius</p>
      </Link>

     
      <div className="hidden sm:flex ">
        
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="black_btn bg-light-blue">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                
                src={session?.user.image}
                width={37}
                height={37}
                className=" rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <SignInButtons />
        )}
      </div>
      <div className="flex sm:hidden relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className=" rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn bg-light-blue border-0"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <SignInButtons />
        )}
      </div>
    </nav>
  );
}
