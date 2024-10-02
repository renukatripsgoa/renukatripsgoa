'use client'
import React, { useEffect, useState } from 'react'
import Addcategory from "@/app/admin/addcategory/Addcategory"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
} from "@nextui-org/react";
import { getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Power } from "lucide-react";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

const AddCategories = () => {

  const [session, setSession] = useState({});

  let router = useRouter();

  useEffect(() => {

    const getSessionInfo = async () => {
      const session = await getSession();
      setSession(session);
    };
    getSessionInfo();
    
  }, []);

  const profile = (
    <PopoverContent>
      <div>
        <div className="px-1 py-2 flex gap-10 flex-col ">
          {(session && session?.user?.user_role === "admin") ? (
            <User
              name={session?.user?.user_id}
              description=""
              avatarProps={{
                src: "https://www.svgrepo.com/show/509009/avatar-thinking-3.svg",
              }}
              className="text-black"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col items-start mr-6">
        <Button
          variant="shadow"
          color="danger"
          size="sm"
          className="left-4 mt-3 mb-3"
          startContent={<Power />}
          onClick={async (e) => {
            try {
              await signOut({ redirect: false });
              setSession(null);
              router.push("/adminlogin");
              window.location.reload()
            } catch (error) {
              console.error("Sign out error:", error);
            }
          }}
        >
          Logout
        </Button>
      </div>
    </PopoverContent>
  );

  return (
    <>
      <div className="sticky w-full bg-background ">
        <div className="flex mx-auto items-center justify-between bg-blue-500 py-3  ">
          <div className="flex grow justify-end mx-3 ">
            {(session && session?.user?.user_role === "admin")
              ? (
                session?.user?.user_id === undefined &&
                  session?.user?.user_role === undefined ? (
                  <Link
                    href="/adminlogin"
                    // onClick = {(e) => signIn()}
                    className={buttonStyles({
                      color: "primary",
                      radius: "full",
                      variant: "shadow",
                    })}
                  >
                    Login/Sign Up
                  </Link>
                ) : (
                  <>
                    <Popover
                      key="bottom"
                      placement="bottom"
                      color="default"
                      backdrop="transparent"
                    >
                      <PopoverTrigger>
                        <Button
                          color="primary"
                          variant="link"
                          className="capitalize"
                        >
                          <User
                            name={session?.user?.user_id}
                            description=""
                            avatarProps={{
                              src: "https://www.svgrepo.com/show/509003/avatar-thinking-6.svg",
                            }}
                            className="text-white "
                          />
                        </Button>
                      </PopoverTrigger>
                      {profile}
                    </Popover>
                  </>
                )
              ) : (
                <Link
                  href="/adminlogin"
                  // onClick = {(e) => signIn()}
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                  })}
                >
                  Login/Sign Up
                </Link>
              )}
          </div>
        </div>
      </div>

      <div>
        <Addcategory />
      </div></>
  )
}

export default AddCategories;
