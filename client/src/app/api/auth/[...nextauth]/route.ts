// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import Job from "@/models/Job";
import { connectDB } from "@/utils/db";
import Organization from "@/models/Organizations";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: any, account: any }) {
      if (account?.provider === "google") {
        console.log("Google sign-in detected");
        await connectDB();

        try {
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            const [firstName, ...lastNameArray] = user.name.split(' ');
            const lastName = lastNameArray.join(' ');

            
            const newJob = new Job({
              title: "",
              department: "",
              employmentType: "",
              classification: "",
              skills: "",
              location: "",
              
              includeSalary: "",
              salaryDetails: {
                currency: "",
                paidEvery: "",
                minSalary: "",
                maxSalary:"" ,
              }
            });

            await newJob.save();
            
            const newOrganization = new Organization({
              orgName: '',
              orgType: '',
              contactEmail: '',
              contactPhone: '',
              job: newJob._id,
            });
            
            await newOrganization.save();

            const newUser = new User({
              firstname: firstName,
              lastname: lastName,
              email: user.email,
              secoundemail: '',
              role: '',
              bio: '',
              verificationCode:'',
              fileupload: '',
              job: newJob._id,
              company: newOrganization._id,
            });
            await newUser.save();
            console.log("User saved successfully.");
           

            return true;
          }

          console.log("User already exists, skipping save.");
          return true;
        } catch (err) {
          console.error("Error saving user:", err);
          return false;
        }
      }

      return true;
    },
    async session({ session, token }: any) {
      try {
        await connectDB();
        const user = await User.findOne({ email: token.email });

        if (user) {
          session.user.firstname = user.firstname;
          session.user.lastname = user.lastname;
          session.user.role = user.role ?? '';
          session.user.bio = user.bio ?? '';
          session.user.secoundemail = user.secoundemail ?? '';
          
        }
      } catch (err) {
        console.error("Error fetching user session:", err);
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
