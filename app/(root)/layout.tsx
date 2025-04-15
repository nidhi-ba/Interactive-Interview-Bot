import { ReactNode } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className="root-layout">
      <nav>
        <Link className="flex items-center gap-2" href="/">
          <Image src="/logo.svg" alt="logo/" width={38} height={32} />
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;
