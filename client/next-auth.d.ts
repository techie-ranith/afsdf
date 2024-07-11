// next-auth.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      firstname?: string;
      lastname?: string;
      role?: string;
      bio?: string;
      secoundemail?: string;
    } & DefaultSession["user"];

    organization?: {
      orgName?: string;
      orgType?: string;
      industry?: string;
      address?: string;
      contactEmail?: string;
      contactPhone?: string;
    };
  }

  interface User {
    firstname: string;
    lastname: string;
  }
}
