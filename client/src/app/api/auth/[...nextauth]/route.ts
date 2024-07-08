import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import { connectDB } from "@/utils/db";

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
          console.log("Existing user:", existingUser);

          if (!existingUser) {
            const newUser = new User({
              name: user.name,
              email: user.email,
              image: user.image,
            });

            await newUser.save();
            console.log("New user saved:", newUser);

           
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

    async session({ session, token }: { session: any, token: any }) {
      await connectDB();

      try {
        if (token) {
          const dbUser = await User.findById(token.id);
          if (dbUser) {
            session.user.id = dbUser._id;
          }
        }
      } catch (error) {
        console.error("Error fetching user from database:", error);
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
