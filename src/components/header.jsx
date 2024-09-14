import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { BriefcaseBusinessIcon, Heart, PenBox } from "lucide-react";
// import { s } from "vite/dist/node/types.d-aGj9QkWt";

export const Header = () => {
  const [showSingIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  const {user}=useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target == e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <h1 className="italic font-bold font-serif text-4xl">CareerPursue
          </h1>
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            {user?.unsafeMetadata?.role==="recruiter" &&(<Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2 " />
                Post a Job
              </Button>
            </Link>)}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Job"
                  labelIcon={<BriefcaseBusinessIcon size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showSingIn && (
        <div
          className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpFallbackRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};
